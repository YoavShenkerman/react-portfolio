import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import AVLTree from './components/Projects/AVLTree'
import FibonacciHeap from './components/Projects/FibonacciHeap'
import LaLigaPredictor from './components/Projects/LaLigaPredictor'
import HabitTracker from './components/Projects/HabitTracker'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/avl-tree" element={<AVLTree />} />
          <Route path="/fibonacci-heap" element={<FibonacciHeap />} />
          <Route path="/laliga-predictor" element={<LaLigaPredictor />} />
          <Route path="/habit-tracker" element={<HabitTracker />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
