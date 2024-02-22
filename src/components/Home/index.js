import { Link } from "react-router-dom"
import './index.scss';

const Home = () => {
    return(
        <div className='home-page'>
            <div className='text-zone'>
                <h3>Hello!</h3>
                <h1>I'm Brian</h1>
                <h2>A Front-End Developer based <br></br> in <a href="https://www.google.com/search?client=opera-gx&q=bacolod+city&sourceid=opera&ie=UTF-8&oe=UTF-8" 
                    target="_blank" rel="noreferrer">Bacolod City, Philippines</a></h2>
                <Link to='/contact' className='contact-button'>CONTACT ME</Link>        
            </div>
            <div class="home-BGanimation" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    )
}

export default Home