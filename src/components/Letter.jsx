export function Letter({
	letter,
	isEntered = false,
	correct = false,
	bordered = false,
}) {
	let className = "";

	if (isEntered) {
		if (correct) {
			className = "correct-letter";
		} else {
			className = "wrong-letter";
		}
	}

	if (bordered) {
		className = `${className} bordered-letter`;
	}

	return (
		<li className={`letters ${className}`}>
			<span>{letter ? letter : " "}</span>
		</li>
	);
}
