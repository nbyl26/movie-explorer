import { useBookmark } from "../context/BookmarkContext";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState"; // 🛠️ tambahkan baris ini
import { useEffect, useState } from "react";

const Favorites = () => {
    const { bookmarks } = useBookmark();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulasi loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">❤️ My Bookmarked Movies</h2>
            {loading ? (
                <Loader />
            ) : bookmarks.length === 0 ? (
                <EmptyState type="bookmark" />
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {bookmarks.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
