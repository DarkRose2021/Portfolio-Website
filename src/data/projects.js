import ManeFrameImg from "../assets/ManeFrame/homepage.png";
import bakeryImg from "../assets/SweetMysticBakery/sweetMysticBakery.png";
import tellusImg from "../assets/Tellus/tellus.png";

export const projects = [
	{
		slug: "sweet-mystic-bakery",
		title: "Sweet Mystic Bakery",
		category: "Website Design",
		description:
			"Brand and responsive bakery website focused on visual consistency, usability, and clear customer-facing content.",
		tools: ["React", "Figma", "Canva", "Sass"],
		image: bakeryImg  ,
	},
	{
		slug: "mane-frame",
		title: "Mane Frame",
		category: "UI/UX & Development",
		description:
			"Mock photography business website created as a senior capstone with a focus on polished user experience.",
		tools: ["React", "Node.js", "Express", "MongoDB"],
		image: ManeFrameImg,
	},
	{
		slug: "tellus",
		title: "TELLUS",
		category: "UI Design",
		description:
			"Dashboard and website interface work focused on clearer layouts, consistency, responsiveness, and quality.",
		tools: ["React", "Figma", "Material UI", "Playwright"],
		image: tellusImg,
	},
];
