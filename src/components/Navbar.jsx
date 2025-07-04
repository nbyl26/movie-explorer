import { useTheme } from "../context/ThemeContext";
import { useSearch } from "../context/SearchContext";
import { useState } from "react";
import { Sun, Moon, Search, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const { setKeyword } = useSearch();
    const [searchInput, setSearchInput] = useState("");
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(searchInput);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 flex flex-col sm:flex-row sm:justify-between items-center gap-2 px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                🎬 Movie Explorer
            </Link>

            <form onSubmit={handleSubmit} className="flex w-full sm:w-auto">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="px-3 py-1 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none w-full sm:w-auto"
                />
                <button
                    type="submit"
                    className="px-3 py-1 rounded-r-md bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-1"
                >
                    <Search size={18} />
                    Search
                </button>
            </form>

            <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <Link
                    to="/favorites"
                    className={`flex items-center gap-1 ${isActive("/favorites") ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-200"
                        }`}
                >
                    <Heart size={20} />
                    My Favorites
                </Link>

                <button
                    onClick={toggleTheme}
                    className="text-gray-800 dark:text-gray-100 border px-2 py-1 rounded-md border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center"
                >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
