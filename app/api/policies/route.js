import { Policy } from "@/app/models/policy-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const policies = await Policy.find({ type });
    return NextResponse.json({ policies }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
