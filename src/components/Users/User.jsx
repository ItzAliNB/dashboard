import React from 'react';
import { UserList } from './UserList';

export const Users = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-xl h-auto rounded-2xl min-h-screen">
      <UserList />
    </div>
  );
};