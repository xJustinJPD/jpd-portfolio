import { useState, useEffect } from 'react'
import axios from 'axios';

import projectsJSON from '../../assets/data/projects.json'

import ProjectCard from '../../components/ProjectCard';

const ProjectsIndex = () => {
    const [projects, setProjects] = useState([])

    console.log(projects)

    useEffect(() => {
        axios.get('https://jpd-portfolio-default-rtdb.europe-west1.firebasedatabase.app/.json')
        .then(response => {
            setProjects(response.data)
        })
        .catch(e => {
            console.error(e)
        })
    }, [])

    const projectList = projects.map((project, i) => {
        return <ProjectCard key={i} project={project}/>
    })

    console.log(projectList)

    return (
        <div className='grid grid-cols-2 gap-6 justify-items-center'>
        {projectList}
        </div>
    );
};

export default ProjectsIndex;