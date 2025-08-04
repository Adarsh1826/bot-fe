"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { AUTH_API_ENDPOINTS } from "@/utils/auth";

export const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(AUTH_API_ENDPOINTS.LOGIN, {
        email,
        password,
      });
      if (res.data?.messege?.success) {
        alert("Login Successful");
        router.push("/dashboard");
      } else {
        alert("Invalid credentials or login failed.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
        alert("Login failed: " + (error.response?.data?.message || "Unknown error"));
      } else {
        console.error("Unexpected error:", error);
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <span>Signing in...</span> : <span>Sign In</span>}
          </Button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-500 text-sm">or continue with</span>
        </div>

        {/* Google Login */}
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign in with Google</span>
        </Button>

        {/* Bottom Actions */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Don&#39;t have an account?</p>
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-600 hover:underline ml-1"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-2 text-center">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="text-gray-500"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
