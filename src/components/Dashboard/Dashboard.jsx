import React from 'react';
import { UsageCard } from './Card';
import { ChartLineInteractive } from '../ui/LineChart';

export const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-xl h-auto rounded-2xl min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <UsageCard title={'Today'} description={'Usage'} action={'0.0GB'} footer={'Online Users'} />
        <UsageCard title={'Yesterday'} description={'Usage'} action={'0.0GB'} footer={'Online Users'} />
        <UsageCard title={'Monthly'} description={'Usage'} action={'0.0GB'} footer={'Online Users'} />
        <UsageCard title={'Total Usage'} description={'Usage'} action={'0.0GB'} footer={'Online Users'} />
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
        <ChartLineInteractive />
      </div>
    </div>
  );
};