import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import LogoCoder from '../../assets/images/codeLogo.png'
import AnimatedLetters from '../AnimatedLetters'
import HomeLogo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', '<','U', 'R', 'O', 'š', '</>'];
    const jobArray = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K', ' ', 'D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];

    
    function textAnimation() {
        return setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }

    useEffect(() => {
        textAnimation();
    }, []);

    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoCoder} alt="logo" />
                    <span><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /></span>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
                </h1>
                <h2>Frontend Developer / JavaScript </h2>
                <h2>Backend Developer / PHP </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <HomeLogo />
        </div>
    )
}
export default Home