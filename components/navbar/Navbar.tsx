'use client'
import { useState } from "react";
import { LuPlaneTakeoff } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Signin } from "@/components/Signin/Signin"
export const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Blur background when modal is open */}
      <div className={`${showForm ? "blur-sm pointer-events-none select-none" : ""}`}>
        <div className="flex justify-between items-center p-2">
          <div><LuPlaneTakeoff className="w-6 h-6" /></div>
          <div className="flex items-center gap-x-5">
            <a
              href="https://github.com/Adarsh1826/bot-fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <Button onClick={() => setShowForm(true)} className="bg-red-100">
              Try it Now!
            </Button>
          </div>
        </div>
      </div>
      <Signin showForm={showForm} setShowForm={setShowForm}/>
    </>
  );
};
