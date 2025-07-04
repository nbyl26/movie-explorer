import { useEffect, useState } from "react";
import { getPopularMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies();
            setMovies(data);
            setLoading(false);
        };

        fetchMovies();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">🔥 Popular Movies</h2>
            {loading ? (
                <p>Loading movies...</p>
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
