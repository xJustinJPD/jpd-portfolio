import { useState, useEffect, lazy, Suspense } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router';
import axios from 'axios';

import projectsJSON from '../../assets/data/projects.json'



const ProjectsDemo = () => {

    const [project, setProject] = useState(null)

    const { slug } = useParams()

    const navigate = useNavigate()

    const App = lazy(() => import (`./demos/${slug}/App`))

    useEffect(() => {

        axios.get('https://jpd-portfolio-default-rtdb.europe-west1.firebasedatabase.app/.json')
        .then(response => {
            let temp = response.data.find((project) => {
                return project.slug === slug
            })
            if(!temp){
                navigate("/projects")
            }
            else if(!temp.demo){
                navigate(`/projects/${temp.slug}`)
            }
            else{
                setProject(temp)
            }
        })
        .catch(e => {
            console.error(e)
        })



    }, [])

    if(!project) {return <h1>Project does not exist.</h1>}

    return(
        <Suspense fallback={<div>...Loading</div>}>
            <App/>
        </Suspense>
    )
};

export default ProjectsDemo;