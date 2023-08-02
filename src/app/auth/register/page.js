"use client";
import Input from "@/components/Input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import { toast } from "react-hot-toast";
import axios from "axios";

function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const onRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      toast.success(response.data.message);
      router.push("/auth/login");
    } catch (error) {
      console.log("error");
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.userName.length > 0 &&
      user.password.length > 0 &&
      user.email.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <>
      <div className="flex">
        <div className="flex justify-center items-center infordiv">
          {loading && <Spinner />}

          <div className="auth-form flex flex-col gap-5 infordiv">
            <h2 className="text-2xl text-center py-5 px-3 color-white">
              Register{" "}
            </h2>

            <Input
              label="Username"
              type="text"
              name="userName"
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              error={user.userName.length === 0 ? "Username is required" : ""}
              placeholder="Enter your username"
              required
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              error={user.email.length === 0 ? "Email is required" : ""}
              placeholder="Enter your email"
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              error={user.password.length === 0 ? "Password is required" : ""}
              placeholder="Enter your password"
              required
            />

            <button
              className={
                buttonDisabled
                  ? "disabled-btn text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5  mb-2"
                  : "btn-home text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5  mb-2"
              }
              onClick={onRegister}
            >
              Register
            </button>

            <Link
              className="text-blue-600 hover:underline dark:text-blue-500"
              href="/auth/login"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
        <div className="bg-image"></div>
      </div>
    </>
  );
}
export default Register;
