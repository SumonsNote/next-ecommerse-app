import { User } from "@/app/models/user-model";
import { createToken } from "@/utils/token-helper";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reqObj = await req.json();
    const email = reqObj.email;
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    } else {
      await User.findOneAndUpdate({ email: user.email }, { otp: "0" });
    }

    const token = await createToken(user.email, user._id);
    const expireTime = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const cookieOptions = `token=${token}; HttpOnly; Secure; Expires=${expireTime.toUTCString()}; Path=/`;

    return NextResponse.json(
      { status: "Success", token },
      { status: 200, headers: { "set-cookie": cookieOptions } }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
