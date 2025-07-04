import { useBookmark } from "../context/BookmarkContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
    const { bookmarks } = useBookmark();

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">❤️ My Bookmarked Movies</h2>
            {bookmarks.length === 0 ? (
                <p>You haven't bookmarked any movies yet.</p>
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
