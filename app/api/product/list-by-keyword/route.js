import { Product } from "@/app/models/product-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get("keyword").trim();
    const products = await Product.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { short_des: { $regex: keyword, $options: "i" } },
      ],
    });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
