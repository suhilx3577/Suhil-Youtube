import React, { useEffect , useMemo , useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { findPrime } from '../utils/helper';
import Demo1 from './Demo1';



const Demo = () => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(toggleMenu())
    },[])

    const [ text, setText] = useState();
    const [ ex, setEx] = useState("");

    const ans = useMemo(()=> findPrime(text) , [text]) 


  return (
    <div className='col-span-11 mt-8 ml-4 flex '>
        <div className='w-96 h-96 border border-black p-2 '>
            <div className='h-6 flex gap-2'>
                <p className='font-bold'>Input : </p>
                <input className='bg-slate-100 px-2' type="number"  onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='mt-3 p-2'><span className='font-semibold'>Answer is :</span>{ans}</div>
            <input className='bg-slate-200' type="text" value={ex} onChange={(e)=>setEx(e.target.value)}/>

        </div>
        <Demo1/>



    </div>
  )
}

export default Demo