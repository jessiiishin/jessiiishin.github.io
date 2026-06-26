import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
    
  )
}

export default App
