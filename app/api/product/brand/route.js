import { Brand } from "@/app/models/brand-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const brandObj = await req.json();
    const brand = await Brand.create(brandObj);
    return NextResponse.json(
      { brand, message: "Successfully created brand" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const brands = await Brand.find();
    return NextResponse.json({ brands }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
