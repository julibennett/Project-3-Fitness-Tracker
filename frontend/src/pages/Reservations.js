import { useParams, useNavigate } from "react-router-dom"

const Reservations = (reservation) => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id

  const removeReservation = (e) => {
    e.preventDefault()
    reservation.deleteReservation(id)
    navigate("/reservation")
  }


  return (
    <div>
      <h1>My Reservations</h1>
      <strong>{reservation.typeOfClass}</strong>
      <input type="button" value="Delete" onClick={removeReservation}/>
    </div>
  )
}

export default Reservations