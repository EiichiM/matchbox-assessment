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
        <header className="flex justify-between items-center p-3 px-5 header">
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
            <Link className="text-white" href={`/`}>Home</Link>
            <Link className="text-white" href={`/auth/login`}>Log In</Link>
            <Link className="text-white" href={`/auth/register`}>Register</Link>
            <i className="ri-logout-box-r-line" onClick={onLogout}>
              Logout
            </i>
            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className="flex mx-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              <span className="sr-only">Open user menu</span>
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                />
                <path
                  fill="#fff"
                  d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                />
              </svg>
            </button>
          </div>
        </header>
      )}
      {isNotPrivatePage && <div></div>}
      <div className="">{children}</div>
    </div>
  );
}

export default LayoutProvider;
