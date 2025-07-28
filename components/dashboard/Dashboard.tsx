'use client'
import { SideNav } from "../navbar/SideNavBar/Sidenav"
import { useSession } from "next-auth/react";
export const Dashboard = () => {
    const { data: session } = useSession()
    const type = session ? "dashboard" : "login";
    return (
        <div className="h-screen w-full bg-black text-white">
            <SideNav type={type}/>
        </div>
    )
}