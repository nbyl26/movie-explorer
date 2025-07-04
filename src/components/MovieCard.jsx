import { useBookmark } from "../context/BookmarkContext";
import { Heart, HeartOff } from "lucide-react";

const MovieCard = ({ movie }) => {
    const { title, poster_path, vote_average, id } = movie;
    const { toggleBookmark, isBookmarked } = useBookmark();

    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden group transition-all duration-300 hover:shadow-lg relative">
            <div className="overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={`Poster of ${title}`}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
                <p className="text-sm text-yellow-400 font-medium">⭐ {vote_average}</p>
            </div>

            <button
                onClick={() => toggleBookmark(movie)}
                className="absolute top-2 right-2 text-pink-500 hover:scale-125 transition-transform bg-white dark:bg-gray-800 rounded-full p-1"
                title="Bookmark this movie"
            >
                {isBookmarked(id) ? <Heart fill="currentColor" size={20} /> : <HeartOff size={20} />}
            </button>
        </div>
    );
};

export default MovieCard;
