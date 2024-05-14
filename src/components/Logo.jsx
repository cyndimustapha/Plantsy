// modularization

// import/export

// 1. Must return JSX
// 2. Must start with a capital letter
// 3. We are using functions
// 4. Must always return one parent element
export function Logo() {
	return (
		<div className="flex justify-center p-5">
			<h1 className="font-bold text-5xl">Plantsy 🌱</h1>
		</div>
	);
}

export default Logo;