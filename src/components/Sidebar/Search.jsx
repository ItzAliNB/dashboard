import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommandMenu } from './CommandMenu';

export const Search = () => {
    const [open, setOpen] = useState(false);

    const handleContextMenu = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    return (
        <>
            <div
                className="bg-gray-400 rounded flex items-center px-2 py-1.5 justify-center text-sm  lg:w-auto cursor-pointer"
                onContextMenu={handleContextMenu}
            >
                <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
                <input
                    onFocus={(e) => {
                        e.target.blur();
                        setOpen(true);
                    }}
                    type="text"
                    placeholder="Search"
                    className="hidden lg:block w-full bg-transparent placeholder:text-white focus:outline-none pl-2 cursor-pointer"
                    onContextMenu={handleContextMenu}
                />
            </div>
            <CommandMenu open={open} setOpen={setOpen} />
        </>
    );
};