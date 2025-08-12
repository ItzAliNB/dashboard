import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const AccountToggle = () => {
    return (
        <div className="border-b mb-4 mt-2 pb-4 hidden lg:flex">
            <button className="flex p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded transition-colors relative gap-2 w-full items-center cursor-pointer">
                <FontAwesomeIcon className='text-black dark:text-white' icon={faUser} size="2x" />
                <div className="hidden sm:block text-start">
                    <span className="text-sm font-bold block text-black dark:text-white">Amir Hossein</span>
                    <span className="text-xs block text-gray-700 dark:text-gray-200">XXXX@gmail.com</span>
                </div>
            </button>
        </div>
    );
};