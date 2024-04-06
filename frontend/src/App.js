
import './App.css';
// import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Reservation from './components/Reservation'
// import Add from './components/Add'
import Home from './pages/Home';
import ClassShow from './pages/ClassShow';

function App() {

  // const classURL = 'http://localhost:4000/class'

  //Reservation
  // const resURL = "http://localhost:4000/reservation"

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        FitHub
      </h1>
      <Routes>
        {/* Class Routes below*/}
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ClassShow />} />
      </Routes>
      <Reservation />
    </div>
  );
}

export default App;
