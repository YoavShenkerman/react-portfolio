import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          Portfolio p = new Portfolio();
          <br />
          <span className="sub-line">p.run();</span>
        </span>

        <Outlet />

        <span className="tags bottom-tags">{'// End of execution'}</span>
      </div>
    </div>
  )
}

export default Layout
