import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState(() => {
        const stored = localStorage.getItem("bookmarks");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);

    const toggleBookmark = (movie) => {
        const exists = bookmarks.find((m) => m.id === movie.id);
        if (exists) {
            setBookmarks(bookmarks.filter((m) => m.id !== movie.id));
        } else {
            setBookmarks([...bookmarks, movie]);
        }
    };

    const isBookmarked = (id) => bookmarks.some((m) => m.id === id);

    return (
        <BookmarkContext.Provider
            value={{ bookmarks, toggleBookmark, isBookmarked }}
        >
            {children}
        </BookmarkContext.Provider>
    );
};

export const useBookmark = () => useContext(BookmarkContext);
