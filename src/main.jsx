import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SearchProvider } from "./context/SearchContext";
import { BookmarkProvider } from "./context/BookmarkContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <SearchProvider>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>
);





