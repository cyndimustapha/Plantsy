// App.js
import React, { useEffect, useState } from "react";
import AddPlant from "./components/AddPlant";
import Logo from "./components/Logo";
import PlantList from "./components/PlantList";
import SearchPlant from "./components/SearchPlant";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // fetching plant data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/plants");
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, { ...newPlant, id: Date.now() }]);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <main className="px-10">
      <Logo />
      <AddPlant onAddPlant={handleAddPlant} />
      <SearchPlant setSearchInput={setSearchInput} searchInput={searchInput} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default App;
