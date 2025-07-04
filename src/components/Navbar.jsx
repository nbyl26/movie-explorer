import { useTheme } from "../context/ThemeContext";
import { useSearch } from "../context/SearchContext";
import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const { setKeyword } = useSearch();
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(searchInput); // simpan ke context
    };

    return (
        <nav className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                <Link to="/">🎬 Movie Explorer</Link>
            </h1>

            <Link
                to="/favorites"
                className="text-blue-600 dark:text-blue-300 underline"
            >
                My Favorites
            </Link>

            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="px-3 py-1 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none"
                />
                <button
                    type="submit"
                    className="px-3 py-1 rounded-r-md bg-blue-500 text-white hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            <button
                onClick={toggleTheme}
                className="text-gray-800 dark:text-gray-100 border px-3 py-1 rounded-md border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
                {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
        </nav>
    );
};

export default Navbar;
