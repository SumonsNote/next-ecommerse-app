import { CustomerProfile } from "@/app/models/customer-profile-model";
import { ProductReview } from "@/app/models/product-review-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    const productReview = await ProductReview.find({
      productId: productId,
    }).populate({
      path: "customerId",
      model: CustomerProfile,
      select: "cusName -_id",
    });

    return NextResponse.json({ status: 201, productReview });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
