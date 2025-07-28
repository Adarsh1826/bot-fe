'use client';
import { Sidebar, SidebarBody, useSidebar } from "../ui/sidebar";
import {  FaSignOutAlt } from "react-icons/fa";
import {  signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { useState } from "react";
export const SideNav = ({ type }: { type: string }) => {
    if (type !== "dashboard") return null;
    return (
        <div className="h-full">
            <Sidebar>
                <SidebarBody className="h-full">
                    <NavContent />
                </SidebarBody>
            </Sidebar>
        </div>
    );
};


const NavContent = () => {
    const { open } = useSidebar();
    const [isOpen, setOpen] = useState(false)



    return (
        <>
            <div className="flex flex-col justify-between h-full text-neutral-800 dark:text-neutral-200">
                {/* Top Section */}
                <div>
                    <nav className="space-y-2 px-2">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setOpen(true)
                            }}
                            className={`w-full flex items-center ${open ? "gap-2 px-3 justify-start" : "justify-center p-3"
                                }`}
                        >
                            <div className="min-w-[24px] min-h-[24px] flex items-center justify-center">
                                <img
                                    src="/icons/code-forces.svg"
                                    alt="Codeforces"
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                            {open && <span>Codeforces</span>}
                        </Button>
                    </nav>

                </div>

                {/* Bottom Section (Logout) */}
                <div className="px-2 pb-4">
                    <Button
                        variant="destructive"
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-2 justify-start"
                    >
                        <FaSignOutAlt className="text-base" />
                        {open && <span>Logout</span>}
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                    <div className=" dark:bg-neutral-900 p-6 rounded-xl max-w-md">
                        <Button
                            variant="secondary"
                            onClick={()=>{setOpen(false)}}
                            className="mt-4 w-full"
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}

        </>
    );
};
