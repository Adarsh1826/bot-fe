'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if ([username, email, password].some((field) => field.trim() === "")) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Signup failed.");
        return;
      }

      setMessage("Signup successful! Redirecting...");
      router.push("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSignup}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </form>

        {message && (
          <p className="mt-2 text-sm text-center text-red-500">{message}</p>
        )}

        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-500 text-sm">or continue with</span>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() =>
            alert("You can add Google signup here if needed.")
          }
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign up with Google</span>
        </Button>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Already have an account?</p>
          <button
            onClick={() => router.push("/signin")}
            className="text-blue-600 hover:underline ml-1"
          >
            Sign In
          </button>
        </div>

        <div className="mt-2 text-center">
          <Button
            variant="ghost"
            onClick={() => {
              router.push("/");
            }}
            className="text-gray-500"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
