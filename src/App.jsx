import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OffcanvasCard from "./components/OffcanvasCard";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div style={{ backgroundColor: "#778899" }}>
      <OffcanvasCard />
      <Header />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
