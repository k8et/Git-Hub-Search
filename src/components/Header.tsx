import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <nav className="flex justify-between items-center h-16 px-5 shadow-md bg-gray-800 text-white">
            <h3 className="text-xl font-bold">Github Search</h3>

            <span className="flex space-x-4">
        <Link
            to="/"
            className="text-base font-medium text-gray-300 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
            to="/favourites"
            className="text-base font-medium text-gray-300 hover:text-white transition-colors"
        >
          Favourites
        </Link>
      </span>
        </nav>
    );
}
