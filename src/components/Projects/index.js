import './index.scss'
import hireMe from './HireMe.png'

const Projects = () => {

    return(
        <div className='projects-page'>
            <div className='text-zone'>
                <h1>Sorry . . .</h1>
                <p>Projects are currently in development.</p>
            </div>
            <div className="hireme"><img src ={ hireMe } draggable="false" alt='' /></div>
        </div>
    )
}

export default Projects
