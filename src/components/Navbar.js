import React ,{useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResult } from '../utils/searchSlice';


const Navbar = () => {
    const dispatch = useDispatch();

    const[searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const cacheData = useSelector((store)=>store.search)
    // console.log(cacheData) 

    const handleToggleMenu =() => {
        dispatch(toggleMenu());
    }


    useEffect(()=>{
        
        const timer = setTimeout(()=>{
            if(cacheData[searchQuery]){
                setSearchData(cacheData[searchQuery])
            }
            else{
                APICall()
            }
        },200)
        
        return ()=>{
            clearTimeout(timer)
        }
    

    },[searchQuery])

    const APICall = async () =>{
        const data = await fetch(process.env.REACT_APP_YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json()
        setSearchData(json[1]);
        // console.log(json[1])
        dispatch(cacheResult({
            [searchQuery]:json[1]
        }));
    }

  return (
    <div className='relative pb-10 bg-red-500'>
    <div className='grid grid-flow-col h-14 shadow-lg  bg-white w-full p-2 fixed '>
        <div className='col-span-1 flex'>
            <img className=' h-8 cursor-pointer '
            onClick={()=> handleToggleMenu()}
            
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="Hamburger Icon" />
            <img className=' h-8 px-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Youtube logo" />
        </div>
        <div className='col-span-10 px-10 ml-28 relative'>
            <div>
                <input onChange={(e)=>setSearchQuery(e.target.value)} className='border border-gray-400 rounded-l-full w-96 h-9 px-4' />
                <button className='border border-gray-400  h-9 w-16 rounded-r-full'>Search</button>
            </div>
            {/* searchData.map((search)=> <li className='hover:cursor-default hover:bg-gray-100 rounded-lg px-3'> & {search}</li> ) */}

            { <div className='absolute bg-white w-96 mt-3 rounded-lg'>
                <ul>
                    {
                        searchData && searchData.map((search)=> <li className='hover:cursor-default hover:bg-gray-100 rounded-lg px-3' key={search}> & { search}</li>)
                    }
                </ul>
            </div>
            } 
        </div>

        <div className='col-span-1'>
            <img className=' h-8' src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="User Icon" />
        </div>
    </div>

    </div>
  )
}

export default Navbar