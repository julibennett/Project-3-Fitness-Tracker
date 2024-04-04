import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const [classes, setClasses] = useState([])
    const URL = 'http://localhost:4000/class'

    const fetchClasses = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setClasses(data.data)
  }

  useEffect(() => {
      fetchClasses()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1>All Workout Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classes.map((workoutClass) => (
                    <div key={workoutClass.id} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold mb-2">{workoutClass.name}</h2>
                        <p className="mb-4">{workoutClass.description}</p>
                        <Link to={`/${workoutClass.id}`} className="text-blue-500 hover:text-blue-600 transition-colors">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home