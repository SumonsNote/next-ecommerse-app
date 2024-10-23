import { Category } from "@/app/models/category-model";
import { dbConnect } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const categoryObj = await req.json();
    const category = await Category.create(categoryObj);
    return NextResponse.json(
      { category, message: "Successfully created category" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const categorys = await Category.find();
    return NextResponse.json({ categorys }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
