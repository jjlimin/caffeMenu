import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardListPage from "./components/CardListPage";
import ManagePage from "./components/ManagePage";

function App() {
  const [cards, setCards] = useState([
    {
      image: "https://www.royalcupcoffee.com/sites/default/files/images/blog/AdobeStock_159183621update.jpg",
      title: "Sandwich",
    },
    {
      image: "https://www.royalcupcoffee.com/sites/default/files/images/blog/AdobeStock_159183621update.jpg",
      title: "Coffee",
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<CardListPage cards={cards} />} />
      <Route path="/manage" element={<ManagePage cards={cards} setCards={setCards} />} />
    </Routes>
  );
}

export default App;
