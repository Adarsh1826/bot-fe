'use client';
import { useSession } from "next-auth/react";
import { Navbar } from "../navbar/Navbar";
import { BackgroundLines } from "../ui/background-lines";
import { SideNav } from "../dashboard/Sidenav";

export const LandingContent = () => {
  const { data: session } = useSession();
  const type = session ? "dashboard" : "login";

 
  if (type === "dashboard") {
    return (
      <div className="h-screen w-full bg-black text-white">
        <SideNav type="dashboard" />
      </div>
    );
  }

  
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <BackgroundLines>
        {/* Navbar */}
        <div className="relative z-20">
          <Navbar type="login" />
        </div>

        {/* Hero Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Day with a Code Challenge
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            We send you one coding problem every morning at 7AM — via Email. Stay sharp, stay consistent.
          </p>
          <button
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
            onClick={() => alert("Lol")}
          >
            🚀 Click To Become Expert
          </button>
        </div>
      </BackgroundLines>
    </div>
  );
};
