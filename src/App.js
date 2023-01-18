import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import Project from './components/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/personal-portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personal-portfolio/about" element={<About />} />
          <Route path="/personal-portfolio/contact" element={<Contact />} />
        </Route>
        <Route path="/personal-portfolio/project" element={<Project />} />
      </Routes>
    </>
  )
}

export default App
