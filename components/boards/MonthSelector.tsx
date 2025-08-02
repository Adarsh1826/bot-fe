import React from "react";

interface MonthSelectorProps {
  selected: string;
  onChange: (value: string) => void;
}

const months: string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MonthSelector: React.FC<MonthSelectorProps> = ({ selected, onChange }) => {
  return (
    <select
      className="mb-6 px-4 py-2 rounded bg-white bg-opacity-30 text-black backdrop-blur-md border border-gray-600"
      value={selected}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
    >
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default MonthSelector;
