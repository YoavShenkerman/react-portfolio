import './project.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faGithub,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { SiPostgresql } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { useNavigate } from 'react-router-dom'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'

const LaLigaPredictor = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showVideo, setShowVideo] = useState(false)
  const navigate = useNavigate() // React Router hook

  const goBack = () => navigate(-1)
  const openGitHub = () =>
    window.open(
      'https://github.com/YoavShenkerman/football-predictions',
      '_blank',
      'noreferrer'
    )

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="project-container">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'L',
              'a',
              'L',
              'i',
              'g',
              'a',
              ' ',
              'M',
              'a',
              't',
              'c',
              'h',
              ' ',
              'P',
              'r',
              'e',
              'd',
              'i',
              'c',
              't',
              'o',
              'r',
            ]}
            idx={5}
          />
        </h1>
        <p>
          A machine learning project for predicting Spanish LaLiga match
          outcomes. Includes data preprocessing, model training, and performance
          optimization — combining a passion for data and sports analytics.
        </p>
        <div className="buttons">
          <button className="back-btn" onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
          <button className="github-btn" onClick={openGitHub}>
            View <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <button className="video-btn" onClick={() => setShowVideo(true)}>
            Watch Video <FontAwesomeIcon icon={faVideo} />
          </button>
        </div>
        {showVideo && (
          <div className="video-modal">
            <div className="overlay" onClick={() => setShowVideo(false)}></div>
            <video controls autoPlay>
              <source
                src={process.env.PUBLIC_URL + '/laligapreVid.mp4'}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      <div className="tech-stack">
        <h3>Technologies Used:</h3>
        <div className="icons">
          <div className="tech-icon">
            <FontAwesomeIcon icon={faPython} color="#306998" />
            <span className="tooltip">Python</span>
          </div>
          <div className="tech-icon">
            <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            <span className="tooltip">React</span>
          </div>
          <div className="tech-icon">
            <FontAwesomeIcon icon={faCss3} color="#264DE4" />
            <span className="tooltip">CSS3</span>
          </div>
          <div className="tech-icon">
            <SiPostgresql color="#336791" />
            <span className="tooltip">PostgreSQL</span>
          </div>
          <div className="tech-icon">
            <DiRedis color="#DC382D" />
            <span className="tooltip">Redis</span>
          </div>
          <div className="tech-icon">
            <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
            <span className="tooltip">Git</span>
          </div>
          <div className="tech-icon">
            <FontAwesomeIcon icon={faGithub} color="#181717" />
            <span className="tooltip">GitHub</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaLigaPredictor
