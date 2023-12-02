import React from "react";
import { Card, Button, Carousel, Image } from "react-bootstrap";

const Projects = () => {
	const projects = [
		{
			name: "Mane Frame Photography",
			imgs: ["images/ManeFrame/homepage.png"],
			desc: "This was my Capstone project. I started this March 2023 and I'm still working on it, I want to get this website to be as much like an actual website as possible. This project was made in Reactjs, with an Express backend and MongoDB as the database. I took this class in the 4th quarter of my 2nd year",
			github: "https://github.com/DarkRose2021/Capstone",
		},
		{
			name: "Recipe Finder",
			imgs: ["images/Recipe/homepage.png",
      "images/Recipe/cat.png",
      "images/Recipe/ingredent.png",
      "images/Recipe/name.png"],
			desc: "I made this for my Front-End Implementation class. I was supposed to find an api and make a useful website with it. I chose to use a recipe api. This was made in Angular and the api was from ",
			github: "https://github.com/DarkRose2021/Recipe-Finder",
		},
    {
			name: "CSC260 Assignments",
			imgs: ["images/CSC260/madlib1.png",
      "images/CSC260/madlib2.png",
      "images/CSC260/gameHome.png",
      "images/CSC260/gameCollection.png",
    ],
			desc: "",
			github: "https://github.com/DarkRose2021/CSC260",
		},
		{
			name: "EventEquinePlanner",
			imgs: ["images/Event/EmpathyMapTemplate.png",
      "images/Event/Live Wires.png",
    ],
			desc: "",
			github: "",
		},
		
	];
	return (
		<div className="projects">
  {projects?.map((project) => (
    <div key={project.name} className="project">
      <Card>
        {project.name === "Mane Frame Photography" ? (
          <Carousel slide={false} interval={null} keyboard={true} touch={true} indicators={false} controls={false}>
            {project.imgs?.map((img) => (
              <Carousel.Item key={img}>
                <Image src={img} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Carousel slide={false} interval={null} keyboard={true}>
            {project.imgs?.map((img) => (
              <Carousel.Item key={img}>
                <Image src={img} />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.desc} {project.name === "Mane Frame Photography" ? (<p>This project has been deployed: <a href="https://www.maneframephotography.com/" target = "_blank" rel="noreferrer">https://www.maneframephotography.com/</a></p>): project.name === "Recipe Finder" ? (<a href="https://www.themealdb.com/" target = "_blank" rel="noreferrer">https://www.themealdb.com/</a>) : (<></>)}</Card.Text>
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
	);
};

export default Projects;
