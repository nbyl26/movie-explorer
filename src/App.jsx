import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="p-6">
        <Home />
      </main>
    </div>
  );
}

export default App;
