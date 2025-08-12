import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommandMenu } from './CommandMenu';
import { FaBeer, FaMoon, FaSun } from 'react-icons/fa';

export const Search = () => {
    const [open, setOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('theme');
        return savedMode === 'dark' ? true : false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const handleContextMenu = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        <FaMoon color='white' />
    };

    return (
        <>
            <div className="flex items-center space-x-2">
                <div
                    className="bg-purple-700 dark:bg-white rounded flex items-center px-2 py-1.5 justify-center text-sm lg:w-auto cursor-pointer"
                    onContextMenu={handleContextMenu}
                >
                    <FontAwesomeIcon icon={faSearch} size="lg" className='text-white dark:text-black' />
                    <input
                        onFocus={(e) => {
                            e.target.blur();
                            setOpen(true);
                        }}
                        type="text"
                        placeholder="Search"
                        className="hidden lg:block w-full bg-transparent dark:placeholder:text-black placeholder:text-white focus:outline-none pl-2 cursor-pointer"
                        onContextMenu={handleContextMenu}
                    />
                </div>
                <button
                    className="space-x-2 px-2 py-2 bg-purple-700 dark:bg-white rounded cursor-pointer"
                    onClick={handleToggleDarkMode}

                >
                    {isDarkMode ? <FaMoon color='black' /> : <FaSun color='white' />}
                </button>
            </div>


            <CommandMenu open={open} setOpen={setOpen} />
        </>
    );
};