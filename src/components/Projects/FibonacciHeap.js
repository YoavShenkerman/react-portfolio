import './project.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faGithub, faJava } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

const FibonacciHeap = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const navigate = useNavigate() // React Router hook

  const goBack = () => navigate(-1)
  const openGitHub = () =>
    window.open(
      'https://github.com/YoavShenkerman/FibonacciHeapProject',
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
              'F',
              'i',
              'b',
              'o',
              'n',
              'a',
              'c',
              'c',
              'i',
              ' ',
              'H',
              'e',
              'a',
              'p',
            ]}
            idx={5}
          />
        </h1>
        <p>
          An optimized Java implementation of a Fibonacci Heap supporting
          efficient merge, decrease-key, and extract-min operations. Highlights
          deep knowledge of advanced data structures and amortized analysis.
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
            <FontAwesomeIcon icon={faJava} color="#f89820" />
            <span className="tooltip">Java</span>
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

export default FibonacciHeap
