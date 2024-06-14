import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Projects.module.css'
import { Link } from 'react-router-dom'

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/greencap');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.whole}>
      <div>Here are a list of our projects</div>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className="project verified">
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
            <p>{project.description}</p>
          
            <Link to={`/project/${project.id}`}>Read More</Link> {/* Link to the project details */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
