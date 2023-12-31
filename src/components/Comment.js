import React from 'react'

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='flex gap-2 bg-slate-100 rounded-lg p-2 mt-1'>
        <div >
            <img className='h-8 w-8 mt-2 ' src="https://cdn-icons-png.flaticon.com/512/709/709722.png" alt="icon" />
        </div>
        <div>
        <h1 className='font-bold text-lg'>{name}</h1>
        <p className=' text-sm'>{text}</p>
        </div>
    </div>
  )
}

export default Comment