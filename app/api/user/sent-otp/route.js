import { User } from "@/app/models/user-model";
import { sendEmail } from "@/utils/email";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const emailText = `Your OTP code is ${code}`;
    const subject = "Next E-Commerse Verification OTP Code";

    await sendEmail(email, emailText, subject);

    const result = await User.findOneAndUpdate({ email, otp: code });
    return NextResponse.json(
      { result, message: "OTP sent to email" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
