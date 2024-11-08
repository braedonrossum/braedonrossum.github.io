import React from "react";
import tkaPreview from "../../assets/tka-preview.png";
import githubLogo from "../../assets/github-mark.svg";
import globe from "../../assets/globe.svg";
import projectData from '../../data/data.json';

function Card() {
    const projects = projectData.projects;

    return (
        <div>
            {projects.map((project, index) => (
                <article className="projects-card" key={index}>
                    <p className="projects-card__title">{project.title}</p>
                    <img
                        src={project.previewImage.src}
                        alt={project.previewImage.alt}
                        className="projects-card__preview"
                    />
                    <div className="icon-container">
                        {project.links.map((link, linkIndex) => (
                            <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="icon"
                                    src={link.icon.src}
                                    alt={link.icon.alt}
                                />
                            </a>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Card;
