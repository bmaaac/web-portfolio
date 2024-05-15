import './index.scss'
import shuttle from './img/SpaceShuttle.png';
import avatar from './img/Avatar.png';

const About = () => {
    return(
        <div className='about-page'>
                <div className='avatar'>
                    <img src ={ avatar } draggable="false" alt='' />
                </div>
            <div className='text-zone'>
                <h1>About me</h1>
                <p>I'm quite fascinated when it comes to computers and technology in general. 
                    From the intricate inner workings of hardware components to the limitless possibilities of software development, 
                    I find myself constantly intrigued by the ever-evolving world of technology.</p>
            </div>
            <div className='about-animation'>
                    <ul class="stars">
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
                        <div className='rocket'>
                            <img src ={ shuttle } draggable="false" alt='' />
                        <div className='burn'></div>
                </div>
            </div>
        </div>
    )
}

export default About