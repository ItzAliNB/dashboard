import React from 'react';
import { AccountToggle } from './AccountToggle';
import { Search } from './Search';
import { RouteSelect } from './RouteSelect';

export const Sidebar = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 rounded-xl p-2 lg:p-4 w-16 lg:w-auto shadow-lg shadow-black/20 ">
      <div className="overflow-y-scroll scrollbar-hide sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
    </div>
  );
};