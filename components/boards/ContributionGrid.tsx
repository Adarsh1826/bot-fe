'use client';

import React from "react";

const daysOfWeek: string[] = ["S", "M", "T", "W", "T", "F", "S"];
const totalDays = 371;

const generateYearData = (): number[] =>
  Array(totalDays)
    .fill(0)
    .map(() => Math.floor(Math.random() * 3));

const getColor = (level: number): string => {
  switch (level) {
    case 1:
      return "bg-white";
    case 2:
      return "bg-green-400";
    default:
      return "bg-green-700";
  }
};

type MonthLabel = {
  name: string;
  week: number;
};

const monthLabels: MonthLabel[] = [
  { name: "Jan", week: 0 },
  { name: "Feb", week: 4 },
  { name: "Mar", week: 8 },
  { name: "Apr", week: 13 },
  { name: "May", week: 17 },
  { name: "Jun", week: 21 },
  { name: "Jul", week: 26 },
  { name: "Aug", week: 30 },
  { name: "Sep", week: 35 },
  { name: "Oct", week: 39 },
  { name: "Nov", week: 44 },
  { name: "Dec", week: 48 },
];

const ContributionGrid: React.FC = () => {
  const data: number[] = generateYearData();

  // Break into weekly arrays
  const weeks: number[][] = [];
  for (let i = 0; i < totalDays; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const currentYear: number = new Date().getFullYear();

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center text-white px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          📅 Contributions in {currentYear}
        </h1>

        <div className="rounded-xl bg-gray-800 p-6 shadow-lg overflow-x-auto">
          {/* Month Labels */}
          <div className="flex text-xs text-gray-300 pl-6 mb-1">
            {monthLabels.map((month, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  minWidth: "24px",
                  marginLeft:
                    index === 0
                      ? `${month.week * 15}px`
                      : `${(month.week - monthLabels[index - 1].week) * 15}px`,
                }}
              >
                {month.name}
              </div>
            ))}
          </div>

          {/* Grid container */}
          <div className="flex gap-1">
            {/* Weekday Labels */}
            <div className="flex flex-col justify-between mr-2 text-xs text-gray-400">
              {daysOfWeek.map((day, idx) => (
                <div key={idx} className="h-4 w-4 text-center">{day}</div>
              ))}
            </div>

            {/* Contributions grid */}
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1">
                {week.map((level, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`w-4 h-4 rounded ${getColor(level)}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-4 flex justify-between text-sm text-gray-400 max-w-md mx-auto">
            <span>⬜ Missed</span>
            <div className="flex gap-1">
              {[1, 2].map((level) => (
                <div
                  key={level}
                  className={`w-4 h-4 rounded ${getColor(level)}`}
                />
              ))}
            </div>
            <span>🟩 More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionGrid;
