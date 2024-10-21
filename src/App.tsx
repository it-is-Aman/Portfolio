import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Hero />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Hero />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App