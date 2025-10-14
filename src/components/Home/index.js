import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <span className="name"> Yoav</span>
          <br />
          CS Student
        </h1>
        <h2>Currently a 2nd-year student at Tel Aviv University</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
