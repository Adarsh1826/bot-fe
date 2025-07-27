'use client';
import { LuPlaneTakeoff } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
export const Navbar = ({ type }: {
  type: string
}) => {
  const router = useRouter();
  return (
    <div className="p-2 bg-black text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <LuPlaneTakeoff className="w-6 h-6" />
        </div>

        {/* Desktop buttons */}
        {type === "login" ? (
          <div className="hidden md:flex items-center gap-x-5">
            <a
              href="https://github.com/Adarsh1826/bot-fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-white" />
            </a>
            <Button
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
              onClick={() => {
                router.push('/signin')
              }}
            >
              🚀 Get Started
            </Button>
          </div>
        ) : null}

        {/* Mobile dropdown */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a
                  href="https://github.com/Adarsh1826/bot-fe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4 text-[#f5f5f5]" />

                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/signin')}>
                <Button
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
            onClick={() => {
              router.push('/signin')
            }}
          >
            🚀 Get Started
          </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {type === "login" && (
          // Mobile dropdown
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/Adarsh1826/bot-fe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaGithub className="w-4 h-4 text-[#f5f5f5]" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/signin')}>
                  Try it Now!
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};
