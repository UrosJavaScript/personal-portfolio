import React from 'react'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import LogoCoder from '../../assets/images/u.svg'
import AnimatedLetters from '../common/AnimatedLetters'
import AnimatedSVG from '../common/AnimationSVG'
import LoaderPac from '../common/LoaderPac'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['R', 'O', 'Š']
  const jobArray = [
    'F',
    'U',
    'L',
    'L',
    'S',
    'T',
    'A',
    'C',
    'K',
    ' ',
    'D',
    'E',
    'V',
    'E',
    'L',
    'O',
    'P',
    'E',
    'R',
  ]
  const [loading, setLoading] = useState(false)

  const textAnimation = () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    textAnimation()

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
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoCoder} alt="logo" />
              <span>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
              </span>
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={17}
              />
            </h1>
            <div className="wrapper-heading">
              <h2>Frontend Developer / JavaScript </h2>
              <h2>Backend Developer / PHP </h2>
            </div>

            <div className="wrapper-btn">
              <button className="btn-home-contact">
                <Link to="/personal-portfolio/contact">CONTACT ME</Link>
              </button>
              <button className="btn-home-download">
                <a href="/personal-portfolio/Uros_Kovcic_CV_2024.pdf" download>
                  DOWNLOAD CV
                </a>
              </button>
            </div>
          </div>
          <div className="home-position-animation">
            <AnimatedSVG />
          </div>
        </div>
      )}
    </>
  )
}
export default Home
