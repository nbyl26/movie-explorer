import { SearchX, HeartOff } from "lucide-react";

const EmptyState = ({ type = "search" }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-300 py-10">
            {type === "search" ? (
                <>
                    <SearchX size={48} className="mb-4" />
                    <p className="text-lg font-medium">No movies found 😢</p>
                    <p className="text-sm">Try searching with a different keyword.</p>
                </>
            ) : (
                <>
                    <HeartOff size={48} className="mb-4" />
                    <p className="text-lg font-medium">No favorites yet 🫠</p>
                    <p className="text-sm">Start bookmarking movies you like!</p>
                </>
            )}
        </div>
    );
};

export default EmptyState;
