import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h1 className='text-center'>Organize your <br/>work and life, finally!</h1>
            <p>Find Your Focus, Stay Organized, and Embrace Calm with Our<br/> Premier Todo App. Your Ultimate Task Management Solution!</p>
            <button className='home-btn p-2'> Make Todo List</button>
        </div>
    </div>
  )
}

export default Home