import React from 'react'

const Background = ({ image, children }) => {
  return (
    <div
      className="h-screen w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  )
}

export default Background
