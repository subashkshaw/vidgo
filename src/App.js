import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Upload from './components/Contents/Upload.js';
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Upload" element={<Upload/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
