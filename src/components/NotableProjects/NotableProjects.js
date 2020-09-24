import React from 'react';
import { NOTABLE_PROJECTS } from '../../content/content';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';

const NotableProjects = () => {
    let images = [project1, project2, project3];
    return (
        <div className="container">
            <div className="notable">
                {NOTABLE_PROJECTS.map((project, index) => (
                    <div className="notable-project">
                        <div className="project-description">
                            <h2>{project.title}</h2>
                            <p>{project.desciption}</p>
                            {project.tools.map(tool => (
                                <div id="tool">{tool}</div>
                            ))}
                            <div>
                                {project.git && <a href={project.git} target="_blank" rel="noopener noreferrer"><i className="lab la-github" ></i></a>}
                                {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer"><i className="las la-external-link-square-alt"></i></a>}
                            </div>
                        </div>
                        <img id="project-pic" src={images[index]} alt="project" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotableProjects
