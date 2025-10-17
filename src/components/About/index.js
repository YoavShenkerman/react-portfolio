import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faGithub,
  faJava,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={10}
          />
        </h1>
        <p>
          I'm a motivated and ambitious CS student at Tel Aviv University,
          passionate about software engineering, backend and fullstack
          positions. I enjoy tackling challenging projects and learning new
          technologies along the way.
        </p>
        <p>
          I'm naturally curious, detail-oriented, a fast and self-learner, and
          always looking to improve my coding and problem-solving skills one
          project at a time.
        </p>
        <p>
          Outside of coding, I enjoy playing video games, working out at the
          gym, playing football, and spending time with friends and family.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faGithub} color="#181717" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#61DAFB" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#264DE4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faPython} color="#306998" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJava} color="#f89820" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
