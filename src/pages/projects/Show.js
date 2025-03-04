import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import projectsJSON from '../../assets/data/projects.json'

import ProjectCard from '../../components/ProjectCard';

const ProjectsShow = () => {

    const [project, setProject] = useState(null)

    const { slug } = useParams()

    useEffect(() => {

        let temp = projectsJSON.find((project) => {
            return project.slug === slug
        })

        setProject(temp)

    }, [])

    if(!project) {return <h1>No project found.</h1>}

    let items = project.images.map((image, i) => {
        return(
            <div id={`item${i}`} className="carousel-item w-25 h-200">
            <img src={`${image.path}`} title={image.caption} alt={image.caption} className="w-full" />
            </div> 
        )
    })

    let buttons = project.images.map((image, i) => {
        return(
            <a href={`#item${i}`} className="btn btn-xs">{i + 1}</a> 
        )
    })

    let imageCarousel

    if(project.images){
        imageCarousel = (  
            <>
            <div className="carousel carousel-vertical w-auto h-full">
                { items }
            </div> 
            {/* <div className="flex justify-center py-2 gap-2">
                { buttons }
            </div> */}
            </> 
            )
    }

    const tags = project.tags.map((tag, i) => {
        return <div key={i} className="badge badge-neutral">{tag}</div> 
    })

    return (
        <>
        <div className='flex my-5 p-5'>
        <div className='w-1/2 mx-5'>
        <h1 className="mb-5 text-5xl font-bold">{ project.title }</h1>
        { tags }
        <br/>
        <br/>
        <h1>{ project.description }</h1>
        <br/>
        <h1><b>Date:</b> { project.date }</h1>
        <br/>

        <div className='mt-3 card-actions justify-content-between'>
        {(project.website) ? (<a href={project.website} rel="noreferrer" className="btn btn-neutral">Website</a>) : (null)}
        {(project.github) ? (<a href={project.github} rel="noreferrer" className="btn btn-neutral">Github</a>) : (null)}
        {(project.demo) === true ? (<Link className="btn btn-neutral" to={`/projects/${project.slug}/demo`}>Demo</Link>) : (null)}
        </div>
        </div>




        <div className='justify-end w-1/2 h-80'>
        { imageCarousel }
        </div>
        </div>
        </>
    );
};

export default ProjectsShow;