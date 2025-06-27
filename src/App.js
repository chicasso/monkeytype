import { useEffect, useState } from "react";
import { Typing } from "./components/Typing";

function App() {
	const [userInputs, setUserInputs] = useState([]);
	const [columns, setColumns] = useState(100);
	const [rows, setRows] = useState(4);
	const [content, setContent] = useState(
		"follow use some look from number public thing you be still well too even between become before man face there many against order look way not but play child new he small seem might interest they"
	);

	useEffect(() => {
		const keydownEventListener = (event) => {
			if (!event.metaKey) {
				if (
					event.key === " " &&
					(userInputs.length === 0 || userInputs[userInputs.length - 1] === " ")
				) {
					return;
				} else if (event.key !== "Backspace" && event.key.length === 1) {
					setUserInputs((prev) => {
						return [...prev, event.key];
					});
				} else if (
					event.key === "Backspace" &&
					userInputs[userInputs.length - 1] !== " "
				) {
					setUserInputs((prev) => {
						return prev.slice(0, prev.length - 1);
					});
				}
			}
		};

		window.addEventListener("keydown", keydownEventListener);

		return () => {
			window.removeEventListener("keydown", keydownEventListener);
		};
	}, [userInputs]);

	return (
		<div className="App">
			<Typing
				content={content}
				rows={rows}
				columns={columns}
				userInputs={userInputs}
			/>
		</div>
	);
}

export default App;
