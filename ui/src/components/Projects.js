import React from 'react'
import Project from './Project'
import './Projects.css'

const Projects = () => {

    return (
      <div className="projects-main">
          <div className="projects-body">
          Projects
          <div className="projects-content">
              <Project id={1} name="Project 1" authorizedUsers={["Sanjay", "Mark"]} />
              <Project id={2} name="Project 2" authorizedUsers={["Sanjay", "Roshan", "Nikhil"]}/>
              <Project id={3} name="Project 3" authorizedUsers={["Wafee", "Nick", "Chucky"]}/>
          </div>
          </div>
      </div>
    )

}

export default Projects;