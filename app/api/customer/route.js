import { CustomerProfile } from "@/app/models/customer-profile-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const reqObj = await req.json();
    const customerProfile = await CustomerProfile.create(reqObj);
    return NextResponse.json({ status: 201, customerProfile });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
