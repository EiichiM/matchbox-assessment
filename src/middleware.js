import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPage = path === "/auth/login" || path === "/auth/register";
  const isVerificationPage =
    path === "/verifyemail" || path === "/auth/resetpassword";
  const token = request.cookies.get("token")?.value || "";

  // if path is public and token is present , redirect to home page
  if (isPublicPage && token && !isVerificationPage) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // if path is private and token is not present , redirect to login page
  if (!isPublicPage && !token && !isVerificationPage) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/login", "/auth/register"],
};
