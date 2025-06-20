import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManagePage = ({ cards, setCards }) => {
  const [newImage, setNewImage] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newImage || !newTitle) return;
    setCards([...cards, { image: newImage, title: newTitle }]);
    setNewImage("");
    setNewTitle("");
  };

  const handleDelete = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Menu Items</h1>

      <form onSubmit={handleAdd} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Item
        </button>
      </form>

      <ul className="space-y-2">
        {cards.map((card, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >
            <span>{card.title}</span>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ManagePage;
