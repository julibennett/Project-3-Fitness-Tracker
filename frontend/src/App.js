
import './App.css';
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Reservation from './components/Reservation'
import Add from './components/Add'



function App() {

  //Reservation
  const resURL = "http://localhost:4000/reservation"

  const [classData, setClassData] = useState(null)

  const fetchClassData = async() => {
    const response = await fetch(`http://localhost:4000/class/660a062f411f77c08526b7b0`)
    const data = await response.json()
    setClassData(data)
  }
  
  useEffect(() => {
    fetchClassData()
  }, [])

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element={<Reservation URL={resURL} classData={classData}/>}/>
      </Routes>
      <Add />
    </div>
  );
}

export default App;
