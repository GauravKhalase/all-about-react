import React from 'react'

const Home = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Home Page
      </h1>
      <h1>{props.username}</h1>
    </div>
  )
}

export default Home