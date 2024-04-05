import { useParams, useNavigate } from "react-router-dom"

const Reservations = (reservation) => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id

  const loaded = (props) => {
    return props.reservation.map((classData, idx) => {
      return(
        <div key={idx}>
          <h1>{classData.studio}</h1>
          <p>{classData.location}</p>
          <p>{classData.typeOfClass}</p>
          <p>{classData.location}</p>
          <button onClick={removeReservation}>Delete</button>
        </div>
      )
    })
  }

  const removeReservation = (e) => {
    e.preventDefault()
    reservation.deleteReservation(id)
    navigate("/reservation")
  }

  return (reservation ? loaded() : <h1>Loading ...</h1>)
}

export default Reservations