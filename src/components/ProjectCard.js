import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {

        const tags = project.tags.map((tag, i) => {
                return <div key={i} className="badge badge-neutral">{tag}</div> 
        })

	return (
                <>
                <div className="card card-compact bg-base-100 shadow-xl my-3 mx-3 w-auto glass">
                <figure className='w-auto h-80'><img src={project.images[0].path} alt={project.images[0].caption} /></figure>
                <div className="card-body">
                        <h2 className="card-title">{project.title}</h2>
                        <p>{project.description}</p>
                        <br/>
                        <div className='card-actions justify-end my-5'>
                        {tags}
                        </div>
                        <div className="card-actions justify-end">
                        {(project.website) ? (<a href={project.website} rel="noreferrer" className="btn btn-neutral">Website</a>) : (null)}
                        {(project.github) ? (<a href={project.github} rel="noreferrer" className="btn btn-neutral">Github</a>) : (null)}
                        <Link className="btn btn-neutral" to={`/projects/${project.slug}`}>More</Link>
                        </div>
                        </div>
                </div>
                </>
	);
};

export default ProjectCard;