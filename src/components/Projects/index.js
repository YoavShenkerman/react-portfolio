import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'AVL Tree Implementation',
    image: '/BinaryTree.png',
    link: '/project/avl-tree',
    bgcolor: '#150957',
  },
  {
    id: 2,
    title: 'Fibonacci Heap Implementation',
    image: '/FibonacciHeap.jpg',
    link: '/project/avl-tree',
    bgcolor: '#080a09',
  },
  {
    id: 3,
    title: 'LaLiga Match Predictor',
    image: '/laliga.png',
    link: '/project/avl-tree',
    bgcolor: '#fdfdfd',
  },
]

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <h2>Check out some of my coding projects and experiments.</h2>
      </div>
      <div className="projects-zone">
        {projects.map((project) => (
          <Link
            to={project.link}
            key={project.id}
            className="project-card"
            style={{ backgroundColor: project.bgcolor }}
          >
            <img src={project.image} alt={project.title} />
            <div className="content">
              <h3>{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
