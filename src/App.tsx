import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/shared/Header/Header"
import { Toaster } from "./components/ui/toaster"
import Auth from "./components/Pages/Auth/Auth"
import Registration from "./components/Pages/Registration/Registration"
import Projects from "./components/Pages/Projects/Projects"
import Dashboard from "./components/Pages/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
