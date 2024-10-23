import { NextResponse } from "next/server";
import { verifyToken } from "./utils/token-helper";

export async function middleware(req, res) {
  try {
    const token = req.cookies.get("token");
    const payload = await verifyToken(token["value"]);
    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);
    requestHeader.set("id", payload["id"]);
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (e) {
    if (req.url.startsWith("/api/")) {
      return NextResponse.json(
        { status: "fail", data: "Unauthorized" },
        { status: 401 }
      );
    } else {
      return res.redirect("/login");
    }
  }
}

export const config = {
  matcher: [
    "/api/cart/:path*",
    "/api/invoice/:path*",
    "/api/user/profile",
    "/api/wish/:path*",
  ],
};
