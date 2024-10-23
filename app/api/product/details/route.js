import { ProductDetail } from "@/app/models/product-details-model";
import { Product } from "@/app/models/product-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const reqObj = await req.json();
    const productDetail = await ProductDetail.create(reqObj);
    return NextResponse.json({ status: 201, productDetail });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    const products = await Product.find({ _id: productId }).populate({
      path: "productDetails",
      model: ProductDetail,
    });

    return NextResponse.json({ status: 200, products });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
