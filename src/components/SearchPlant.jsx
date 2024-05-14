import { useEffect } from 'react';
import { useState } from 'react';

function SearchPlant({ searchInput, setSearchInput }) {
	// state - data that is dynamic in a component
	// everytime the state value is update the component rerenders
	// const [input, setInput] = useState('');

	// useEffect - the callback function will always be triggered/called on every render
	// it`s a rare use case
	// useEffect(() => {
	// 	console.log('Use effect runnign');
	// });

	//2 - the callback function will be called only once after the component has rendered
	// useEffect(() => {
	// 	console.log('Running only once');
	// }, []);

	// - the callback function will be triggered on the first render and every time the value
	// of the depedancy changes
	// useEffect(() => {
	// 	console.log('Running every time the dependancy value changes');
	// }, [input]);

	return (
		<div>
			<h4 className="font-bold text-xl">Search Plants:</h4>
			<input
				type="text"
				placeholder="Type a name to search"
				className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
		</div>
	);
}

// const button =  document.getElementById("submit-assignment");
// button.addEventListener('click', () => {

// })

export default SearchPlant;