// components/Leaderboard.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { leaderboardData } from "@/data/leaderboardData";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  const sortedData = leaderboardData
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-yellow-400 flex items-center gap-3">
        <Trophy className="text-yellow-300" /> Leaderboard
      </h1>

      <div className="w-full max-w-2xl space-y-4">
        {sortedData.map((user, index) => {
          const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : null;

          return (
            <Card key={index} className="bg-gray-800 text-white rounded-2xl shadow-lg">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-yellow-500 w-6">
                    {index + 1}
                  </span>
                  <span className="text-lg">{user.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">{user.score}</span>
                  {medal && <span className="text-2xl">{medal}</span>}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}