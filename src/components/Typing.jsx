import "./styles/typing.css";
import { Letter } from "./Letter";

function Paragraph({ content, userInputs }) {
	const elements = [];

	const userInputWords = userInputs.join("").split(" ");
	const contentWords = content.split(" ");

	const currentInputIndex = userInputWords.reduce((acc, value, idx) => {
		// console.log({ acc, length: contentWords[idx].length });
		if (idx === userInputWords.length - 1) {
			return acc + value.length;
		} else {
			return acc + contentWords[idx].length;
		}
	}, 0);

	console.log("Current Input Index: ", currentInputIndex);

	let currentIndex = 0;

	userInputWords.forEach((userInputWord, idx) => {
		const correspondingContentWord = contentWords[idx];

		// case 1: userInputWord.length === correspondingContentWord.length
		if (userInputWord.length === correspondingContentWord.length) {
			for (let letterIdx = 0; letterIdx < userInputWord.length; letterIdx++) {
				const userLetter = userInputWord[letterIdx];
				const contentLetter = correspondingContentWord[letterIdx];

				const currentLetter = currentIndex === currentInputIndex;

				if (userLetter === contentLetter) {
					elements.push(
						<Letter
							bordered={currentLetter}
							key={elements.length}
							letter={userLetter}
							isEntered={true}
							correct={true}
						/>
					);
				} else {
					elements.push(
						<Letter
							bordered={currentLetter}
							key={elements.length}
							letter={contentLetter}
							isEntered={true}
							correct={false}
						/>
					);
				}

				currentIndex++;
			}
		}
		// case 2: userInputWord.length < correspondingContentWord.length
		else if (userInputWord.length < correspondingContentWord.length) {
			for (let letterIdx = 0; letterIdx < userInputWord.length; letterIdx++) {
				const userLetter = userInputWord[letterIdx];
				const contentLetter = correspondingContentWord[letterIdx];
				const currentLetter = currentIndex === currentInputIndex;

				if (userLetter === contentLetter) {
					elements.push(
						<Letter
							bordered={currentLetter}
							key={elements.length}
							letter={userLetter}
							isEntered={true}
							correct={true}
						/>
					);
				} else {
					elements.push(
						<Letter
							bordered={currentLetter}
							key={elements.length}
							letter={contentLetter}
							isEntered={true}
							correct={false}
						/>
					);
				}

				currentIndex++;
			}

			for (
				let letterIdx = userInputWord.length;
				letterIdx < correspondingContentWord.length;
				letterIdx++
			) {
				const contentLetter = correspondingContentWord[letterIdx];
				const currentLetter = currentIndex === currentInputIndex;

				elements.push(
					<Letter
						bordered={currentLetter}
						key={elements.length}
						letter={contentLetter}
						isEntered={true}
						correct={false}
					/>
				);

				currentIndex++;
			}
		}
		// case 3: userInputWord.length > correspondingContentWord.length
		else if (userInputWord.length > correspondingContentWord.length) {
			for (
				let letterIdx = 0;
				letterIdx < correspondingContentWord.length;
				letterIdx++
			) {
				const userLetter = userInputWord[letterIdx];
				const contentLetter = correspondingContentWord[letterIdx];
				const currentLetter = currentIndex === currentInputIndex;

				if (userLetter === contentLetter) {
					elements.push(
						<Letter
							bordered={currentLetter}
							key={elements.length}
							letter={userLetter}
							isEntered={true}
							correct={true}
						/>
					);
				} else {
					elements.push(
						<Letter
							bordered={currentLetter}
							key={elements.length}
							letter={contentLetter}
							isEntered={true}
							correct={false}
						/>
					);
				}

				currentIndex++;
			}
		}

		// entering space
		elements.push(
			<Letter
				key={elements.length}
				letter={null}
				isEntered={true}
				correct={true}
			/>
		);
	});

	contentWords.slice(userInputWords.length).forEach((contentWord) => {
		for (let letterIdx = 0; letterIdx < contentWord.length; letterIdx++) {
			const letter = contentWord[letterIdx];
			elements.push(
				<Letter
					key={elements.length}
					letter={letter}
					isEntered={false}
					correct={false}
				/>
			);
		}

		// entering space
		elements.push(
			<Letter
				key={elements.length}
				letter={null}
				isEntered={true}
				correct={true}
			/>
		);
	});

	return (
		<div id="paragraph">
			<ul id="paragraph-view">{elements.map((element) => element)}</ul>
		</div>
	);
}

export function Typing({
	content = "",
	rows = 4,
	columns = 100,
	userInputs = [],
}) {
	return (
		<Paragraph
			style={{ backgroundColor: "white" }}
			content={content}
			userInputs={userInputs}
		/>
	);
}
