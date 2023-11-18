function Header({ course }) {
	return <h1>{course.name}</h1>;
}

function Part({ part, exercise }) {
	return (
		<p>
			{part} {exercise}
		</p>
	);
}

function Content({ parts }) {
	return (
		<>
			<Part part={parts[0].name} exercise={parts[0].exercises} />
			<Part part={parts[1].name} exercise={parts[1].exercises} />
			<Part part={parts[2].name} exercise={parts[2].exercises} />
		</>
	);
}

function Total({ parts }) {
	return (
		<p>
			Number of exercises{' '}
			{parts[0].exercises + parts[1].exercises + parts[2].exercises}
		</p>
	);
}
function App() {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<h1>Test change!</h1>
			{/* <Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} /> */}
		</div>
	);
}

export default App;
