import React, { useState } from "react";
import { Card, Button, Carousel, Image, Modal } from "react-bootstrap";

const Projects = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const ImageModal = ({ show, onHide, img }) => (
		<Modal show={show} onHide={onHide} size="xl" animation>
			<Modal.Body>
				<Image src={img} fluid />
			</Modal.Body>
		</Modal>
	);

	const projects = [
		{
			name: "Mane Frame Photography",
			imgs: ["images/ManeFrame/homepage.png"],
			desc: "This was my Capstone project. I started this March 2023 and I'm still working on it. I want to get this website to be as much like an actual website as possible. I took this class in the 4th quarter of my 2nd year",
			github: "https://github.com/DarkRose2021/Capstone",
			icons: [
				"images/icons/reactjs-icon.svg",
				"images/icons/getbootstrap-icon.svg",
				"images/icons/mongodb-icon.svg",
				"images/icons/nodejs-icon.svg",
				"images/icons/sass-lang-icon.svg",
			],
		},
		{
			name: "Recipe Finder",
			imgs: [
				"images/Recipe/homepage.png",
				"images/Recipe/cat.png",
				"images/Recipe/ingredent.png",
				"images/Recipe/name.png",
			],
			desc: "I made this for my Front-End Implementation class. I was supposed to find an api and make a useful website with it. I chose to use a recipe api. This was made in Angular and the api was from ",
			github: "https://github.com/DarkRose2021/Recipe-Finder",
			icons: [
				"images/icons/angular-icon.svg",
				"images/icons/getbootstrap-icon.svg",
				"images/icons/sass-lang-icon.svg",
			],
		},
		{
			name: "CSC260 Assignments",
			imgs: [
				"images/CSC260/madlib1.png",
				"images/CSC260/madlib2.png",
				"images/CSC260/gameHome.png",
				"images/CSC260/gameCollection.png",
			],
			desc: "This was for my Dynamic Web class. The repository has the entire .sln, that's how my teacher had us set it up. The two different web pages in the images are from the Madlibs assignment and The Game Library assignment. This was made with ASP.Net",
			github: "https://github.com/DarkRose2021/CSC260",
			icons: [
				"images/icons/dotnet-vertical.svg",
				"images/icons/getbootstrap-icon.svg",
			],
		},
		{
			name: "Uno 2.0",
			imgs: ["images/Uno/uno.png"],
			desc: "This was for my OOP (Object Orientated Programming) class. This was my final for the class. I worked on this with one of my classmates. I was redoing Uno from the previous class I had taken. It might still have some bugs in it, I haven't messed with it since I finished that class in my 2nd quarter of my first year. This project was done in Java",
			github: "https://github.com/DarkRose2021/Uno2.0",
			icons: [
				"images/icons/java-vertical.svg",
				"images/icons/IntelliJ IDEA.svg",
			],
		},
		{
			name: "React Uno",
			imgs: ["images/ReactUno/all.png"],
			desc: "This was for my Software in existing code ans software class. I worked in a group with Harela Johnston. We took an Uno project from Github that was HTML, CSS, and Javascript and turned it into a React.js app. The image on top is what it used to look like and the bottom is how we changed the styling. This is still a work in progress",
			github: "https://github.com/HarleaJohnston/React_Uno/tree/React-Uno",
			icons: [
				"images/icons/reactjs-icon.svg",
				"images/icons/sass-lang-icon.svg",
				"images/icons/getbootstrap-icon.svg",
			],
		},
		{
			name: "EventEquinePlanner",
			imgs: [
				"images/Event/What's your problem.png",
				"images/Event/EmpathyMapTemplate.png",
				"images/Event/Competitive Analysis Template-1.png",
				"images/Event/Live Wires.png",
				"images/Event/Question Everything and Everyone.png",
				"images/Event/Make It All Work.png",
			],
			desc: "This assignment is for my Projects in User Experience class. Each assignment builds on each other. As of 12/02/2023 I am still working on this assignment. There is no repository for this because there is no coding portion, the class is meant to teach us the process of planning out a project.",
			github: "",
			icons: [
				"images/icons/adobe-illustrator-svgrepo-com.svg",
				"images/icons/adobe-photoshop-svgrepo-com.svg",
				"images/icons/adobe-xd-svgrepo-com.svg",
				"images/icons/word-svgrepo-com.svg",
			],
		},
	];
	return (
		<div className="allProjects">
			<center>
				<h1>Projects</h1>
			</center>
			<div className="projects">
				{projects?.map((project, projectIndex) => (
					<div key={project.name} className="project">
						<Card>
							{project.name === "Mane Frame Photography" ||
							project.name === "Uno 2.0" || project.name === "React Uno" ? (
								<Carousel
									slide={false}
									interval={null}
									keyboard={true}
									touch={true}
									indicators={false}
									controls={false}
								>
									{project.imgs?.map((img, index) => (
										<Carousel.Item key={img}>
											<Image src={img} />
											<div className="overlay"onClick={() => setSelectedImage({ projectIndex, index: index })}></div>
										</Carousel.Item>
									))}
								</Carousel>
							) : (
								<Carousel slide={false} interval={null} keyboard={true}>
									{project.imgs?.map((img, index) => (
										<Carousel.Item key={img}>
											<Image src={img} />
											<div className="overlay"onClick={() => setSelectedImage({ projectIndex, index: index })}></div>
										</Carousel.Item>
									))}
								</Carousel>
							)}
							<Card.Body>
								<Card.Title>{project.name}</Card.Title>
								<Card.Text>
									{project.desc}{" "}
									{project.name === "Mane Frame Photography" ? (
										<p>
											This project has been deployed:{" "}
											<a
												href="https://www.maneframephotography.com/"
												target="_blank"
												rel="noreferrer"
											>
												https://www.maneframephotography.com/
											</a>
										</p>
									) : project.name === "Recipe Finder" ? (
										<a
											href="https://www.themealdb.com/"
											target="_blank"
											rel="noreferrer"
										>
											https://www.themealdb.com/
										</a>
									) : (
										<></>
									)}
								</Card.Text>
								<div className="centerIcons">
									{project.icons?.map((icon) => (
										<Image
											src={icon}
											rounded
											className={
												project.name === "Mane Frame Photography"
													? "icons manyIcons"
													: "icons"
											}
											style={{
												background:
													icon === "images/icons/dotnet-vertical.svg"
														? "#e5e5e5"
														: "none",
												width:
												icon === "images/icons/IntelliJ IDEA.svg" ? "35%" : ""
											}}
										/>
									))}
								</div>
								{project.name === "EventEquinePlanner" ? (
									<></>
								) : (
									<a href={project.github} target="_blank" rel="noreferrer">
										<Button variant="primary">GitHub Repository</Button>
									</a>
								)}
							</Card.Body>
						</Card>
					</div>
				))}
			</div>
			<ImageModal
				show={selectedImage !== null}
				onHide={() => setSelectedImage(null)}
				img={
					selectedImage !== null &&
					projects[selectedImage.projectIndex] &&
					projects[selectedImage.projectIndex].imgs
						? projects[selectedImage.projectIndex].imgs[selectedImage.index]
						: null
				}
			/>
		</div>
	);
};

export default Projects;
