import React, { useState } from "react";
import { Card, Button, Carousel, Image, Modal } from "react-bootstrap";
import { projects } from "./data/projects";

const Projects = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const ImageModal = ({ show, onHide, img }) => (
		<Modal show={show} onHide={onHide} size="xl" animation>
			<Modal.Body>
				<Image src={img} fluid />
			</Modal.Body>
		</Modal>
	);
	
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
