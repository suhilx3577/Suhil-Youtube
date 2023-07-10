import React from 'react'
import Button from './Button'

const ButtonList = () => {


    const names = ["Gaming","Gaming","Gaming","Gaming","Gaming","Gaming","Gaming","Gaming","Gaming",]

  return (
    <div className='flex px-2 py-4'>
        {
            names.map((name,i)=> <Button key={i} name={name}/>)
        }
    </div>
  )
}

export default ButtonList