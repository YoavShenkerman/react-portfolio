import './project.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDocker,
  faGitAlt,
  faGithub,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { SiExpo, SiFastapi, SiPostgresql, SiTypescript } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { useNavigate } from 'react-router-dom'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faImages,
  faChevronLeft,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const images = [
  process.env.PUBLIC_URL + '/habit1.png',
  process.env.PUBLIC_URL + '/habit2.png',
  process.env.PUBLIC_URL + '/habit3.png',
  process.env.PUBLIC_URL + '/habit4.png',
  process.env.PUBLIC_URL + '/habit5.png',
  process.env.PUBLIC_URL + '/habit6.png',
]

const HabitTracker = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showGallery, setShowGallery] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const navigate = useNavigate() // React Router hook

  const goBack = () => navigate(-1)
  const openGitHub = () =>
    window.open(
      'https://github.com/YoavShenkerman/habit-track.git',
      '_blank',
      'noreferrer'
    )

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

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
              'H',
              'a',
              'b',
              'i',
              't',
              '-',
              'T',
              'r',
              'a',
              'c',
              'k',
              'e',
              'r',
            ]}
            idx={5}
          />
        </h1>
        <p>
          Built a full-stack Habit Tracker app to solve inconsistency in
          personal goals. Features include JWT authentication, AI-powered weekly
          summaries (Gemini API), and smart caching with Redis for optimal
          performance.
        </p>
        <div className="buttons">
          <button className="back-btn" onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
          <button className="github-btn" onClick={openGitHub}>
            View <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <button className="gallery-btn" onClick={() => setShowGallery(true)}>
            Screenshots <FontAwesomeIcon icon={faImages} />
          </button>
        </div>
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
            <SiTypescript color="3178C6" />
            <span className="tooltip">TypeScript</span>
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
            <FontAwesomeIcon icon={faDocker} color="#2496ED" />
            <span className="tooltip">Docker</span>
          </div>
          <div className="tech-icon">
            <SiFastapi color="#009688" />
            <span className="tooltip">FastAPI</span>
          </div>
          <div className="tech-icon">
            <SiExpo color="#FFFFFF" />
            <span className="tooltip">Expo</span>
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
      {showGallery && (
        <div className="gallery-modal" onClick={() => setShowGallery(false)}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowGallery(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <button className="nav-btn prev" onClick={prevImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <img src={images[currentImage]} alt="Project Screenshot" />

            <button className="nav-btn next" onClick={nextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={currentImage === idx ? 'active' : ''}
                  onClick={() => setCurrentImage(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HabitTracker
