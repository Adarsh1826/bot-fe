'use client';
import { useSession } from "next-auth/react";
import { SideNav } from "../navbar/SideNavBar/Sidenav";
import { useSidebar } from "@/components/ui/sidebar";
import Leaderboard from "../boards/Leaderboard";
import { setLeaderBoardOpen } from "@/store/slices/boardSlice";
import { RootState } from "@/store";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import { X } from "lucide-react";
export const Dashboard = () => {
  const { data: session } = useSession();
  const type = session ? "dashboard" : "login";
  const { open } = useSidebar();
  const dispatch = useDispatch();
  const isLeaderBoardOpen = useSelector((state:RootState)=>state.board.isLeaderBoardOpen)

  return (
    <div className="h-screen w-full bg-black text-white flex transition-all duration-300 ease-in-out">
      {/* Sidebar */}
      <div className="transition-all duration-300 ease-in-out">
        <SideNav type={type} />
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out p-6 overflow-y-auto ${open ? "w-[calc(100%-250px)]" : "w-[calc(100%-80px)]"
          }`}
      >
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          <div
            className="bg-gray-800 rounded-xl p-4 shadow cursor-pointer"
            onClick={() => dispatch(setLeaderBoardOpen())}
          >
            <h2 className="text-lg font-semibold">Top Performers</h2>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            {/* <p>Details here...</p> */}
          </div>

          <div className="bg-gray-800 rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold"
            >Statistics</h2>
            {/* <p>More info...</p> */}
          </div>
        </div>

        {/* Leaderboard Centered Below */}
        {isLeaderBoardOpen && (
          <div className="flex justify-start mt-6">
            <div className="w-full max-w-5xl bg-gray-800 p-6 rounded-xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">ContributionCard</h2>
                <button
                 onClick={() => dispatch(setLeaderBoardOpen())}
                  className="text-white text-lg px-2 rounded hover:bg-gray-700"
                >
                 <X/>
                </button>
              </div>
              <Leaderboard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
