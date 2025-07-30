'use client';
import { useSession } from "next-auth/react";
import { SideNav } from "../navbar/SideNavBar/Sidenav";
import { useSidebar } from "@/components/ui/sidebar"; 

export const Dashboard = () => {
  const { data: session } = useSession();
  const type = session ? "dashboard" : "login";
  const { open } = useSidebar(); 
  return (
    <div className="h-screen w-full bg-black text-white flex transition-all duration-300 ease-in-out">
      {/* Sidebar */}
      <div className="transition-all duration-300 ease-in-out">
        <SideNav type={type} />
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out p-6 overflow-y-auto ${
          open ? "w-[calc(100%-250px)]" : "w-[calc(100%-80px)]"
        }`}
      >
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold">Top Performers</h2>
            <p>Details here...</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <p>Details here...</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold">Statistics</h2>
            <p>More info...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
