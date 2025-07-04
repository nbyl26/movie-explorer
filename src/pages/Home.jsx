import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";
import { useSearch } from "../context/SearchContext";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { keyword } = useSearch();

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            let data = [];

            if (keyword.trim() === "") {
                data = await getPopularMovies();
            } else {
                data = await searchMovies(keyword);
            }

            setMovies(data);
            setLoading(false);
        };

        fetchMovies();
    }, [keyword]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">
                {keyword ? `Search Results for "${keyword}"` : "🔥 Popular Movies"}
            </h2>
            {loading ? (
                <p>Loading movies...</p>
            ) : movies.length === 0 ? (
                <p>No movies found.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
