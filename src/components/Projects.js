import React, { Component } from 'react';
import ProjectAPI from '../projects-api';

class Projects extends Component {
  render() {
    const project = ProjectAPI.all().map(project =>
      <li className="projects-wrap" key={project.id.toString()}>
        <p>
          {project.title}
        </p>
      </li>
    );

    return (
      <div>
        <h3>Portfolio</h3>
        <ul className="all-projects">
          {project}
        </ul>
      </div>
    );
  }
}

export default Projects;
