"use client";
import Input from "@/components/Input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Spinner from "@/components/Spinner";
import Checkbox from "@/components/Checkbox";
function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success(response.data.message);
      router.push("/");
    } catch (error) {
      console.log("error");
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.password.length > 0 && user.email.length > 0) {
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
              Welcome to My Matchbox Tools!
            </h2>

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
            <Checkbox label="Keep me logged in" />
            <button
              className={
                buttonDisabled ? "disabled-btn button-log" : "button-log"
              }
              onClick={onLogin}
            >
              Login
            </button>
            <Link className="color-cyan" href="/auth/reset-password">
              Forgot Pasword?
            </Link>
            <span className="color-grey text-bold text-center">
              Dont have an account? Contact Support: <br />
              support@matchboxvirtual.com <br />
              <Link className="color-grey link-animation" href="/auth/register">
                Or Register here
              </Link>
            </span>
          </div>
        </div>
        <div className="bg-image"></div>
      </div>
    </>
  );
}

export default Login;
