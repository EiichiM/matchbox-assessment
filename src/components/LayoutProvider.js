"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Spinner from "./Spinner";

function LayoutProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const onLogout = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/logout");
      toast.success("Logout Successfull");
      router.push("/auth/login");
    } catch (error) {
      toast.error("Logout Failed");
    } finally {
      setLoading(false);
    }
  };

  const pathname = usePathname();
  const isNotPrivatePage =
    pathname === "/auth/login" ||
    pathname === "/auth/register" ||
    pathname === "/verifyemail" ||
    pathname === "/auth/forgot-password" ||
    pathname === "/auth/reset-password";
  return (
    <div>
      {loading && <Spinner />}
      <Toaster />
      {!isNotPrivatePage && (
        <header className="flex justify-between items-center p-3  header">
          <div className="flex items-center gp-3">
            <Image
              className={""}
              src="/matchbox-logo.png"
              alt="Matchbox Logo"
              width={200}
              height={60}
              priority
            />
          </div>
          <div className="flex gap-5 items-center">
            <Link href={`/`}>Home</Link>
            <Link href={`/auth/login`}>Log In</Link>
            <Link href={`/auth/register`}>Register</Link>
            <i className="ri-logout-box-r-line" onClick={onLogout}>
              Logout
            </i>
          </div>
        </header>
      )}
      {isNotPrivatePage && (
        <div >
        </div>
      )}
      <div className="">{children}</div>
    </div>
  );
}

export default LayoutProvider;
