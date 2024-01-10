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
import { AboutText } from '../../helpers/text/aboutText'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(false)

  const textAnimationAbout = () => {
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
              <AboutText />
            </div>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
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
