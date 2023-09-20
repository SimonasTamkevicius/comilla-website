import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Design from "./components/Design"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
