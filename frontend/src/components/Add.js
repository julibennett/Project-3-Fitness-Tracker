import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import Reservations from "../pages/Reservations"

const Add = (props) => {
    //goes in the class page?
    const { classId } = useParams()

    const [classData, setClassData] = useState(null)

    const fetchClassData = async() => {
        const response = await fetch(`http://localhost:4000/class/${classId}`)
        const data = await response.json()
        setClassData(data)
        props.createReservation(classData)
    }
    
    useEffect(() => {
        fetchClassData()
    }, [])  

    /*
    const handleChange = (e) => {
        e.preventDefault()
        props.createReservation(classData)
    }
    */

    return (
        <div>
            <input type="button" value="Add" onClick={fetchClassData}/>
        </div>
    )
}

export default Add