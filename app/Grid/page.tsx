'use client';

import { useState } from 'react';
import ContributionCard from '@/components/boards/ContributionCard';
import MonthSelector from '@/components/boards/MonthSelector';

const HomePage = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('Jan');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <MonthSelector selected={selectedMonth} onChange={setSelectedMonth} />
      <ContributionCard month ={selectedMonth} />
    </div>
  );
};

export default HomePage;
