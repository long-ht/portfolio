import React from 'react'
import { OTHER_PROJECTS } from '../../content/content';

const OtherProjects = () => {
    return (
        <div className="container">
            <div className="other">
                {OTHER_PROJECTS.map(project => (
                    <div className="other-project">
                        <div>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherProjects
