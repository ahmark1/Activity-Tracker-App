import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import FormLabel from 'react-bootstrap/esm/FormLabel';
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
