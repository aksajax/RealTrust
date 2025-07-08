import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Profile from "./components/Profile"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute"
import About from "./pages/About"
import ProjectsShowcase from "./pages/ProjectsShowcase"

export default function App() {

  return (
    <>
      <ToastContainer />
     
      <Router>
         <Header />
        
        <Routes>

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />

          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/ProjectsShowcase" element={<ProjectsShowcase />} />

        </Routes>
      </Router>

    </>
  )
}