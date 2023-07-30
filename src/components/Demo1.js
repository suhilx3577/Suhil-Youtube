import React, { useRef, useState } from 'react'

const Demo1 = () => {
    let x = 0;
    const [y,setY] = useState(0);
    const ref = useRef(0);

    console.log("rendering....")

  return (
    <div className='w-96 h-96 border border-black p-2 ml-4 '>
        <div>
            <button className='px-4 p-2 bg-orange-900 '
            onClick={()=>{
                x=x+1
                console.log("the x is : ",x);
            }}
            > Increase the Let- X</button>
            <p>Let is : {x}</p>
        </div>  
        <div className='mt-5'>
            <button className='px-4 p-2 bg-red-300 '
            onClick={()=>{
                setY(y+1);
            }}
            > Increase the State- Y</button>
            <p>State is : {y}</p>
        </div>  
        <div className='mt-5'>
            <button className='px-4 p-2 bg-red-100 '
            onClick={()=>{
                ref.current = ref.current+1;
                console.log("Ref is : ",ref.current)
            }}
            > Increase the useRef- Ref</button>
            <p>Ref is : {ref.current}</p>
        </div>  
    </div>
  )
}

export default Demo1