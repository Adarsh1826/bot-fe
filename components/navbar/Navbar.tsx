'use client'
import { LuPlaneTakeoff } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export const Navbar = () => {
  const router = useRouter();
  return (
    <>
      {/* Blur background when modal is open */}
      <div className="">
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
            <Button onClick={() => router.push('/signin')}>
              Try it Now!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
