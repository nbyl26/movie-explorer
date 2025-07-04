import { useBookmark } from "../context/BookmarkContext";

const MovieCard = ({ movie }) => {
    const { title, poster_path, vote_average, id } = movie;
    const { toggleBookmark, isBookmarked } = useBookmark();

    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden hover:scale-105 transition-transform relative">
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-yellow-400">⭐ {vote_average}</p>
            </div>
            <button
                onClick={() => toggleBookmark(movie)}
                className="absolute top-2 right-2 text-xl"
                title="Bookmark this movie"
            >
                {isBookmarked(id) ? "💖" : "🤍"}
            </button>
        </div>
    );
};

export default MovieCard;
