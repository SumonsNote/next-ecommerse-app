import { Product } from "@/app/models/product-model";
import { ProductWish } from "@/app/models/product-wish-model";
import { dbConnect } from "@/utils/mongo";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const header = headers();
    const userId = header.get("id");
    const { productId } = await req.json();

    const productWish = await ProductWish.create({ productId, userId });

    return NextResponse.json(
      {
        status: "success",
        message: "Successfully added to wishlist",
        productWish,
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

export async function GET(req) {
  try {
    await dbConnect();
    const header = headers();
    const userId = header.get("id");

    const productWish = await ProductWish.find({ userId }).populate({
      path: "productId",
      model: Product,
    });

    return NextResponse.json(
      { status: "success", productWish },
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
    const { productId } = await req.json();

    const productWish = await ProductWish.findOneAndDelete({
      productId,
      userId,
    });
    return NextResponse.json(
      { status: "success", message: "Successfully removed from wishlist" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "fail", error: error.message },
      { status: 500 }
    );
  }
}
