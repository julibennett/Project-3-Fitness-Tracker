import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

//Import Pages
import Reservations from "../pages/Reservations"

const Reservation = (props) => {
    const [reservation, setReservation] = useState(null)

    const URL = "http://localhost:4000/reservation"

    const getReservation = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        setReservation(data.data)
        console.log(data.data)
    }

    const createReservation = async(reservation) => {
        const createdRes = await fetch(URL, {
            method: "POST",
            headers: {

            },
            body: JSON.stringify.reservation
        })
        getReservation()
        console.log(createdRes)
    }

    const deleteReservation = async(id) => {
        await fetch(URL + id, {
            method: "DELETE"
        })
        getReservation()
    }

    useEffect(() => {
        getReservation()
    }, [])

    return (
        <Routes>
            <Route path="/reservation" element={<Reservations createReservation={createReservation}/>}/>
        </Routes>
    )
}

export default Reservation