import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './screens/MainPage';
import ProjectDetails from './screens/ProjectDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
