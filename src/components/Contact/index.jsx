import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../common/AnimatedLetters'
import AnimatedSVG from '../common/AnimationSVG'
import LoaderPac from '../common/LoaderPac'
import './index.scss'

const Contact = () => {
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
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                idx={15}
              />
            </h1>
            <p>
              Let's make a great collaboration and even more great projects
              together. You can contact me via email or whatsapp so that we can
              be a great team together.
            </p>

            <div className="wrapper-contact-page">
              <div className="location-container">
                <h3 className="wrap-text">
                  <span>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      color="rgba(255, 255, 255, 0.5607843137)"
                    />
                  </span>
                  <span>Šejkina 50Đ | Serbia, Belgrade</span>
                </h3>
              </div>

              <div className="email-container">
                <h3 className="wrap-text">
                  <span>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="rgba(255, 255, 255, 0.5607843137)"
                    />
                  </span>
                  <span>kowcicuros70@gmail.com</span>
                </h3>
              </div>

              <div className="phone-container">
                <h3 className="wrap-text">
                  <span>
                    <FontAwesomeIcon
                      icon={faPhone}
                      color="rgba(255, 255, 255, 0.5607843137)"
                    />
                  </span>
                  <span>+381691217273</span>
                </h3>
              </div>
            </div>
          </div>

          <AnimatedSVG />
        </div>
      )}
    </>
  )
}
export default Contact
