import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                🎬 Movie Explorer
            </h1>

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
