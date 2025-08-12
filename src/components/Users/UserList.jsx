import React, { useState } from "react";
import users from "../../Data";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export const UserList = () => {
  const [showAll, setShowAll] = useState(false);
  const [filterMode, setFilterMode] = useState("normal");
  const [menuOpen, setMenuOpen] = useState(false);

  const getRemainingTime = (time) => {
    const targetDate = new Date(time);
    if (isNaN(targetDate)) return "Invalid date";

    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return "Expired";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    if (days > 0) return `${days}d remaining`;
    if (hours > 0) return `${hours}h remaining`;
    return `${minutes}m remaining`;
  };

  const calculateRemainingMs = (time) => {
    const targetDate = new Date(time);
    if (isNaN(targetDate)) return null;
    return targetDate - new Date();
  };

  let filteredUsers = [...users];
  if (filterMode === "maxToMin") {
    filteredUsers.sort(
      (a, b) =>
        (calculateRemainingMs(b.time) || 0) -
        (calculateRemainingMs(a.time) || 0)
    );
  } else if (filterMode === "onlyActive") {
    filteredUsers = filteredUsers.filter(
      (u) => calculateRemainingMs(u.time) > 0
    );
  } else if (filterMode === "onlyExpired") {
    filteredUsers = filteredUsers.filter(
      (u) => calculateRemainingMs(u.time) <= 0
    );
  }

  const displayedUsers = showAll
    ? filteredUsers
    : filteredUsers.slice(0, 5);

  return (
    <div className="max-w-full mx-auto">
      <div className="">
        <table className="w-full table-auto border-collapse bg-white dark:bg-neutral-800 shadow-md rounded-lg">
          <thead>
            <tr className="bg-purple-600 dark:bg-white dark:text-black text-white">
              <th className="px-4 py-2 text-left font-semibold w-16">
                ID
              </th>
              <th className="px-4 py-2 text-left font-semibold w-48">
                User
              </th>
              <th className="px-4 py-2 text-left font-semibold w-40">
                <div className="flex items-center justify-between">
                  <span>Remaining</span>
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="ml-2 px-2 py-2 rounded bg-purple-700 hover:bg-purple-800 dark:bg-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <FiMenu className="text-white"/>
                    </button>
                    {menuOpen && (
                      <div className="absolute right-0 mt-2 w-44 bg-white dark: border rounded shadow-lg z-10 text-black">
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => {
                            setFilterMode("normal");
                            setMenuOpen(false);
                          }}
                        >
                          Normal
                        </button>
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => {
                            setFilterMode("maxToMin");
                            setMenuOpen(false);
                          }}
                        >
                          Sort: Max → Min
                        </button>
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => {
                            setFilterMode("onlyActive");
                            setMenuOpen(false);
                          }}
                        >
                          Only Active
                        </button>
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => {
                            setFilterMode("onlyExpired");
                            setMenuOpen(false);
                          }}
                        >
                          Only Expired
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-neutral-700"
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.user}</td>
                <td className="px-4 py-2">
                  {getRemainingTime(user.time)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length > 5 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};
