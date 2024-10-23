import { ProductCart } from "@/app/models/product-cart-model";
import { dbConnect } from "@/utils/mongo";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const header = headers();
    const userId = header.get("id");
    const reqObj = await req.json();

    const productCart = await ProductCart.create({ ...reqObj, userId });
    return NextResponse.json(
      { status: "success", message: "Successfully added to cart", productCart },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "fail", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    await dbConnect();
    const header = headers();
    const userId = header.get("id");

    const { cartId, ...updateData } = await req.json();

    const productCart = await ProductCart.findOneAndUpdate(
      { userId, _id: cartId },
      { $set: updateData },
      { new: true }
    );

    return NextResponse.json(
      { status: "success", message: "Successfully updated cart", productCart },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "fail", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const header = headers();
    const userId = header.get("id");
    const { cartId } = await req.json();

    const productCart = await ProductCart.findOneAndDelete({
      userId,
      _id: cartId,
    });

    if (!productCart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Successfully deleted cart item",
        productCart,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "fail", error: error.message },
      { status: 500 }
    );
  }
}
