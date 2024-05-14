import { useEffect, useState } from 'react';
import AddPlant from './components/AddPlant';
import Logo from './components/Logo';
import PlantList from './components/PlantList';
import SearchPlant from './components/SearchPlant';

// declarative
function App() {
	const [plants, setPlants] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/plants', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => setPlants(data));
	}, []);

	const filteredPlants = plants.filter((plant) =>
		plant.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<main className="px-10">
			<Logo />
			<AddPlant />
			<SearchPlant
				setSearchInput={setSearchInput}
				searchInput={searchInput}
			/>
			<PlantList plants={filteredPlants} />
		</main>
	);
}

export default App;