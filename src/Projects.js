import React, { Component } from 'react';
import ProjectAPI from './projects-api';

class Projects extends Component {
  render() {
    const project = ProjectAPI.all().map(project =>
      <li className="all-project-wrap" key={project.id.toString()}>
        <div className="all-project-description">
          <h2>
            <a href={project.website} target="_blank">
              {project.name}
            </a>
          </h2>
          <p className="project-description">
            {project.description}
          </p>
        </div>
      </li>
    );
    return (
      <ul className="all-project-wrap-group">
        {project}
      </ul>
    );
  }
}

export default Projects;
