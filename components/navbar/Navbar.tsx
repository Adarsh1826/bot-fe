'use client';
import { Button } from "../ui/button"
import { FaGithub } from "react-icons/fa";
import { LuPlaneTakeoff } from "react-icons/lu";
export const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="p-1"><LuPlaneTakeoff className="w-6 h-6 p-0" /></div>
            <div className="flex items-center gap-x-5 p-1">
                <div>
                    <a href="https://github.com/Adarsh1826/bot-fe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                </div>
                <div>
                    <Button className="bg-red-100">Try it Now!</Button>
                </div>
            </div>
        </div>
    )
}
