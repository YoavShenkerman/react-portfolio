import './project.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faGithub,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const AVLTree = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const navigate = useNavigate() // React Router hook

  const goBack = () => navigate(-1)
  const openGitHub = () =>
    window.open(
      'https://github.com/YoavShenkerman/AVLTree',
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
            strArray={['A', 'V', 'L', ' ', 'T', 'r', 'e', 'e']}
            idx={5}
          />
        </h1>
        <p>
          A full Python implementation of an AVL Tree, featuring automatic
          rebalancing after insertions and deletions. Demonstrates strong
          understanding of algorithms and efficient data structures.
        </p>
        <div className="buttons">
          <button className="back-btn" onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
          <button className="github-btn" onClick={openGitHub}>
            View <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
            <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
            <span className="tooltip">Git</span>
          </div>
          <div className="tech-icon">
            <FontAwesomeIcon icon={faGithub} color="#181717" />
            <span className="tooltip">Github</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AVLTree
