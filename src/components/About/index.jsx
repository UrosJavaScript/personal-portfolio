import {
  faAngular,
  faCss3,
  faHtml5,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../common/AnimatedLetters'
import LoaderPac from '../common/LoaderPac'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(false)

  function textAnimationAbout() {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    textAnimationAbout()

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ? (
        <LoaderPac />
      ) : (
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                idx={15}
              />
            </h1>

            <div className="about-text">
              <p>
                I am a Junior Full Stack Web Developer with a two years of
                work experience. Currently, I mainly study and work on FrontEnd
                technologies and go in the direction of additional development.
                In 2018 I finished the PHP course at ITAcademy. During that time
                I did three professional internships, and immediately after that
                I developed projects independently and worked as a freelancer
                for a while. And then I got a job in the company as a FullStack
                developer. I successfully completed several professional courses
                and further improved my knowledge. Every day I read or learn
                something new and I am quickly adaptable because I am a team
                player. I am an extrovert I like to explore and I fit in easily
                everywhere. I am very ambitious and always looking ahead.
              </p>
            </div>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4 " />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#EFD81D" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faPhp} color="#28A4D9" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default About
