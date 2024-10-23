import { Product } from "@/app/models/product-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const products = await Product.find({ brandId: id });
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
