import PlantCard from './PlantCard';

function PlantList({ plants }) {
	return (
		<div className="grid grid-cols-4 gap-4 my-10">
			{plants.map((plant) => (
				<PlantCard key={plant.id} {...plant} />
			))}
		</div>
	);
}

export default PlantList;