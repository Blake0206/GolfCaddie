import { useRound } from '../../context/RoundContext';

export default function HoleInfoPanel() {
	const { state, dispatch } = useRound();
	const { currentHoleIndex, selectedHoleIndex, courseHoles } = state;

	const addShot = () => {
		dispatch({ type: 'ADD_SHOT' });
	};

	const nextHole = () => {
		dispatch({ type: 'NEXT_HOLE' });
	};

	const previousHole = () => {
		dispatch({ type: 'PREVIOUS_HOLE' });
	};

	const selectedCourseHole = courseHoles[selectedHoleIndex];
	// const selectedRoundHole = roundShots[selectedHoleIndex];

	const handleParChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'SET_PAR',
			payload: { index: selectedHoleIndex, par: parseInt(e.target.value, 10) },
		});
	};

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 10,
				left: 10,
				zIndex: 1,
				background: 'black',
				padding: '0.5rem 1rem',
				borderRadius: '4px',
			}}
		>
			<button type='button' onClick={addShot}>
				Mark Ball Location
			</button>
			<button type='button' onClick={previousHole}>
				Previous Hole
			</button>
			<button type='button' onClick={nextHole}>
				Next Hole
			</button>
			<p>Selected Hole: {selectedHoleIndex + 1}</p>
			<p>Current Hole: {currentHoleIndex + 1}</p>

			{selectedCourseHole?.tee &&
				selectedCourseHole?.pin &&
				selectedCourseHole?.par === 0 && (
					<div>
						<label htmlFor='par-input'>Set Par:</label>
						<input
							id='par-input'
							type='number'
							min={3}
							max={6}
							onChange={handleParChange}
						/>
					</div>
				)}
		</div>
	);
}
