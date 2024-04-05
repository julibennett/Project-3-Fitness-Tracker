import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClassShow = () => {
  const { id } = useParams();
  const [workoutClass, setWorkoutClass] = useState(null);

  useEffect(() => {
    
    const URL = `http://localhost:4000/class/${id}`;

    const fetchClassDetails = async () => {
      try {
        const response = await fetch(URL)
        const data = await response.json()
        setWorkoutClass(data)
      } catch (error) {
        console.error('Failed to fetch class details:', error)
      }
    };

    fetchClassDetails()
  }, [id])

  if (!workoutClass) return <div>Loading...</div>

  return (
    <div className="container mx-auto p-4">
      <h1>{workoutClass.type}</h1>
      <p>{workoutClass.location}</p>
      <p>{workoutClass.time}</p>
      <p>{workoutClass.studio}</p>
      <p>{workoutClass.instructor}</p>
      <p>{workoutClass.review}</p>
    </div>
  )
}

export default ClassShow