import { Product } from "@/app/models/product-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const remark = searchParams.get("remark").trim();
    const products = await Product.find({
      remark: { $regex: remark, $options: "i" },
    });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
