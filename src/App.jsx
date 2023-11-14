import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Design from "./components/Design"
import Manage from "./components/AdminTools/Manage"
import { AuthProvider } from "./utils/AuthContext"
import Login from "./components/AdminTools/Login"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import SingleProjectPage from "./components/SingleProjectPage"
import EditProject from "./components/AdminTools/ManageWebsite/EditProject"
import Events from "./components/Events"
import EditEvent from "./components/AdminTools/ManageWebsite/EditEvent"
import SingleEventPage from "./components/SingleEventPage"

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/singleProjectPage" element={<SingleProjectPage />} />
            <Route path="/singleEventPage" element={<SingleEventPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/manage" element={<Manage />} />
              <Route path="/EditProject" element={<EditProject />} />
              <Route path="/EditEvent" element={<EditEvent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
