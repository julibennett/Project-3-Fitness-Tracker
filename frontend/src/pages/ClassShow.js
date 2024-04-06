import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Add from '../components/Add';

const ClassShow = (props) => {
  const { id } = useParams();
  const [workoutClass, setWorkoutClass] = useState(null);

  useEffect(() => {
    
    const URL = `http://localhost:4000/class/${id}`;

    const fetchClassDetails = async () => {
      try {
        const response = await fetch(URL)
        const data = await response.json()
        setWorkoutClass(data.data)
      } catch (error) {
        console.error('Failed to fetch class details:', error)
      }
    };

    fetchClassDetails()
  }, [id])

  const addClass = (e) => {
    e.preventDefault()
    props.createReservation(workoutClass)
  }

  if (!workoutClass) return <div>Loading...</div>

  return (
    <div className="container mx-auto p-4">
      <h1>{workoutClass.typeOfClass}</h1>
      <p>{workoutClass.location}</p>
      <p>{workoutClass.time}</p>
      <p>{workoutClass.studio}</p>
      <p>{workoutClass.instructor}</p>
      {workoutClass.review && workoutClass.review.map((review, index) => (
      <p key={index}>{review}</p>
    ))}

    </div>
  )
}

export default ClassShow