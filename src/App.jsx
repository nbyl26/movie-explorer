import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to Movie Explorer!</h2>
        <p className="mt-2">Kita akan menampilkan film di sini nanti 👀</p>
      </main>
    </div>
  );
}

export default App;
