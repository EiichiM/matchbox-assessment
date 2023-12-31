"use client";
import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";

function ResetPassword() {
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const sendEmail = async () => {
    try {
      setLoading(true);
      await axios.post(`/api/users/resetpassword`, { email });
      toast.success("Reset password link sent to your email");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    try {
      setLoading(true);
      await axios.put(`/api/users/resetpassword`, {
        token,
        password,
      });
      toast.success("Password reset successfully , please login");
      router.push("/auth/login");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const tempToken = window.location.search.split("=")[1];
    setToken(tempToken || "");
  }, []);

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  }, [password, confirmPassword]);

  return (
    <>
      <div className="flex">
        {loading && <Spinner />}

        {token.length === 0 && (
          <div className="flex justify-center items-center">
            <div className="auth-form flex flex-col gap-5 infordiv">
              <h2 className="text-2xl text-center py-5 px-3 color-white">
                Enter your email to receive reset password link
              </h2>

              <Input
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={email.length === 0 ? "Email is required" : ""}
                placeholder="Enter your email"
                required
              />

              <button
                className={
                  email.length === 0
                    ? "disabled-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                }
                onClick={sendEmail}
              >
                Send reset password link
              </button>
            </div>
            <div className="bg-image"></div>
          </div>
        )}

        {token.length > 0 && (
          <div className="flex justify-center items-center">
            <div className="auth-form flex flex-col gap-5 infordiv">
              <h2 className="text-2xl text-center py-5 px-3 color-white">
                Enter your new password and confirm password
              </h2>

              <Input
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={password.length === 0 ? "Password is required" : ""}
                placeholder="Enter your password"
                required
              />

              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={
                  confirmPassword.length === 0
                    ? "Confirm Password is required"
                    : ""
                }
                placeholder="Enter your confirm password"
                required
              />

              {!passwordsMatch && (
                <p className="error">Passwords do not match</p>
              )}

              <button
                className={
                  password.length === 0 ||
                  confirmPassword.length === 0 ||
                  !passwordsMatch
                    ? "disabled-btn text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5  mb-2"
                    : "btn-home text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5  mb-2"
                }
                onClick={resetPassword}
              >
                Reset Password
              </button>
            </div>
            <div className="bg-image"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default ResetPassword;
