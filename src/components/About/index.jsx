import { faAngular, faCss3, faHtml5, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    function textAnimationAbout() {
        return setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }

    useEffect(() => {
        textAnimationAbout();
    }, []);

    return (
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>

                <p>
                I am a Junior FullStack Developer. I am currently doing Front-end and Back-end programming. 1-year theoretical learning of PHP programming language at ITAcademy. 
                </p> 
                <p>After I finished the PHP course at ITAcademy I learned and practiced: CSS, JavaScript, React, React Native, Angular, NodeJs, Bootstrap as well as platforms like Joomla and WordPress.</p> 
                <p> I successfully completed several professional internships in two companies where I further improved and learned some new techniques-tools such as Yii and CodeIgniter Framework and creating Themes and Plugins for WordPress.  I am currently raising my level of knowledge as well as my programming experience itself.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">

                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faPhp} color="#DD0031" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color="#DD0031" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About