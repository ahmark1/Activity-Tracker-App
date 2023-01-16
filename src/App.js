
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Show from './pages/showActivity';
import Activity from './pages/addActivity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Activity />} />
        <Route path="show" element={<Show />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
