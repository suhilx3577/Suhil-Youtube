import React from 'react'

const Button = ({i ,name}) => {
  return (
    <div key ={i}  >
        <button className="bg-slate-400 p-2 rounded-lg mx-2">{name} </button>
    </div>
  )
}

export default Button