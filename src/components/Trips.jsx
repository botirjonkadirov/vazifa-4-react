import React, { useState } from 'react'
import './Trips.css'
import { Usefetch } from '../hooks/Usefetch'

function Trips() {
  
    const [url, serUrl] = useState('http://localhost:3000/trips')
    const {data:trips, isPending,error} = Usefetch(url)

  

    // console.log('hey')

  return (
    <div className='trip-list'>
        <h1>Triplist</h1>
        {isPending&&<div><h3>Loading...</h3></div>}
        {error&&<div><h3>{error}</h3></div>}
        <ul>
            {trips&&trips.map((trip)=>{
                return (
                    <li key={trip.title}>
                        <h2>{trip.title}</h2>
                        <p>{trip.price}</p>
                    </li>
                )
            })}
        </ul> 
        <div className="filters">
            <button onClick={()=>serUrl('http://localhost:3000/trips?location=Europe')}>European trips</button>
            <button onClick={()=>serUrl('http://localhost:3000/trips')}>All trips</button>
        </div>
   </div>
  )
}

export default Trips