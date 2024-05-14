// AddPlant.js
import React, { useState } from "react";

function AddPlant({ onAddPlant }) {
  const [plantName, setPlantName] = useState("");
  const [plantPrice, setPlantPrice] = useState("");
  const [plantImage, setPLantImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlant({ name: plantName, price: plantPrice, image: plantImage});
    // Clear input fields after submission
    setPlantName("");
    setPlantPrice("");
    setPLantImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold text-2xl">Add Plant:</h2>
      <input
        type="text"
        placeholder="Plant Name"
        className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full mb-4"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image-URL"
        className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full mb-4"
        value={plantImage}
        onChange={(e) => setPLantImage(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full mb-4"
        value={plantPrice}
        onChange={(e) => setPlantPrice(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-500 text-white py-2 px-4">
        Add Plant
      </button>
    </form>
  );
}

export default AddPlant;