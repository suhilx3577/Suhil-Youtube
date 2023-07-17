import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../utils/chatSlice';
import Chatmessage from './Chatmessage'
import { generateName , generateText } from '../utils/helper';
const Livechat = () => {

    const [cmt, setCmt] = useState("");
    const dispatch = useDispatch();
    const msgs = useSelector((store)=>store.chat.messages)

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addChat({
                name:generateName(),
                message:generateText(20)
            }));
        },2000)

        return ()=> clearInterval(i);
    },[])

  return (
    <div>
    <div className='border border-black mt-4 ml-2 w-full h-[500px] overflow-y-scroll scroll flex flex-col-reverse'>
        {
            msgs.map((msg,i)=>(<Chatmessage key={i} name={msg.name} message={msg.message}/>))
        }

    </div>
    <div className='mt-1 ml-2 border border-black rounded-lg p-1 px-2'>
    <form action="" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addChat({
            name:"Raghavvva",
            message:cmt,
        }))
        setCmt("");
    }}>
            <input className='px-1' type="text" value={cmt} onChange={(e)=>setCmt(e.target.value)}/>
            <button  className='ml-2 bg-red-400 rounded-lg p-1'>Comment</button>
    </form>
    </div>
    </div>
  )
}

export default Livechat