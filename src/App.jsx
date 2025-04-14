import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import categoryContext from "./components/Category";
import Home from "./components/Home";

function App() {
  const [view, setView] = useState("men's clothing");

  return (
    <categoryContext.Provider value={{ view, setView }}>
      <div className="bg-zinc-800 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </categoryContext.Provider>
  );
}

export default App;
