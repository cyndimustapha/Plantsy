import React from "react";

function PlantCard({ id, image, name, price }) {
	return (
		<div className="w-full">
			<img src={image} alt="" className="w-full h-[250px] object-cover" />

			<div>
				<h4 className="font-bold text-xl">{name}</h4>
				<h4 className="font-semibold">Price: {price}</h4>
				<button className="bg-green-500 p-2">In Stock</button>
			</div>
		</div>
	);
}

export default PlantCard;