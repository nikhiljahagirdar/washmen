const colors = [
	{
		letter: "A",
		color: "Azure",
	},
	{
		letter: "B",
		color: "Brown",
	},
	{
		letter: "C",
		color: "Copper",
	},
	{
		letter: "D",
		color: "Denim",
	},
	{
		letter: "E",
		color: "Ecru",
	},
	{
		letter: "F",
		color: "Fuchsia",
	},
	{
		letter: "G",
		color: "Gold",
	},
	{
		letter: "H",
		color: "Harlequin",
	},
	{
		letter: "I",
		color: "indigo",
	},
	{
		letter: "J",
		color: "jade",
	},
	{
		letter: "K",
		color: "khaki",
	},
	{
		letter: "L",
		color: "lavender",
	},
	{
		letter: "M",
		color: "Magenta",
	},
	{
		letter: "N",
		color: "Navyblue",
	},
	{
		letter: "O",
		color: "orange",
	},
	{
		letter: "P",
		color: "Peach",
	},
	{
		letter: "Q",
		color: "Quartzgrey",
	},
	{
		letter: "R",
		color: "Rose",
	},
	{
		letter: "S",
		color: "Steelblue",
	},
	{
		letter: "T",
		color: "Tan",
	},
	{
		letter: "U",
		color: "Ultramarine",
	},
	{
		letter: "V",
		color: "Violet",
	},
	{
		letter: "W",
		color: "wheat",
	},
	{
		letter: "X",
		color: "Xanthic",
	},
	{
		letter: "Y",
		color: "yellow",
	},
	{
		letter: "Z",
		color: "Zucchini",
	},
];
function getcolors(letters: string) {
	let currentcolor;
	for (const ccolor of colors) {
		if(ccolor.letter==letters){
			currentcolor=ccolor;
		}
	}
	
	return currentcolor;
	
}
function getFirstLetters(strIn: string): string {
	const firstLetters = strIn
		.split(" ")
		.map((word) => word.charAt(0))
		.join("")
		.replace(/[^a-zA-Z0-9 ]/g, "");

	return firstLetters.substring(0, 2);
}

export { getcolors, getFirstLetters };
