"use client";

import React from "react";

const daysOfWeek: string[] = ["S", "M", "T", "W", "T", "F", "S"];
const months: string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

interface ContributionCardProps {
  month: string;
}

const getDaysInMonth = (monthIndex: number): number => {
  const daysPerMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysPerMonth[monthIndex];
};

const generateMonthData = (days: number): number[] =>
  Array(days)
    .fill(0)
    .map(() => Math.floor(Math.random() * 3));

const getColor = (level: number): string => {
  switch (level) {
    case 1:
      return "bg-white";
    case 2:
      return "bg-green-200";
    default:
      return "bg-green-700";
  }
};

const ContributionCard: React.FC<ContributionCardProps> = ({ month }) => {
  const currentMonthIndex = months.indexOf(month);
  const daysInMonth: number = getDaysInMonth(currentMonthIndex);
  const data: number[] = generateMonthData(daysInMonth);

  return (
    <div className="rounded-2xl p-6 bg-white bg-opacity-10 backdrop-blur-md shadow-md w-full max-w-md">
      <div className="text-center text-xl font-bold mb-3">📅 {month}</div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-400 mb-2">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="w-6">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {data.map((level, idx) => (
          <div key={idx} className={`w-6 h-6 rounded ${getColor(level)}`} />
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-400 flex justify-between items-center">
        <span>⬜ Missed</span>
        <div className="flex gap-1">
          {[1, 2, 3].map((level) => (
            <div key={level} className={`w-4 h-4 rounded ${getColor(level)}`} />
          ))}
        </div>
        <span>🟩 More</span>
      </div>
    </div>
  );
};

export default ContributionCard;
