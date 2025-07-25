import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("");

    return (
        <SearchContext.Provider value={{ keyword, setKeyword }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
