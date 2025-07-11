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
import { useSession } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export const Navbar = () => {
  const router = useRouter();
  const { data } = useSession()


  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <LuPlaneTakeoff className="w-6 h-6" />
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-x-5">
          <a
            href="https://github.com/Adarsh1826/bot-fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          {
            data ? (
              <Avatar>
                <AvatarImage src={data?.user?.image ??undefined} />
                <AvatarFallback>{data?.user?.name?.[0] ?? "U"}</AvatarFallback>
              </Avatar>
            ) : (
              <Button onClick={() => router.push('/signin')}>
                Try it Now!
              </Button>
            )
          }

        </div>

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
                  <FaGithub className="w-4 h-4" />
                  
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/signin')}>
                Try it Now!
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
