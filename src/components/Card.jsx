import React from 'react'

const Card = ({image, title}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-pink-100'>
        <img 
            className='w-full h-48 object-cover'
            src={image}
            alt={title}
        />
        <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-900">{title}</h2>
      </div>
    </div>
  )
}

export default Card