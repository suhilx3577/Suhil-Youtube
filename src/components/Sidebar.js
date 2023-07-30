import React from 'react'
import { useSelector } from 'react-redux/es/exports';

const Sidebar = () => {

    const sidebar = useSelector(state=>state.app.isMenuOpen)

    if(!sidebar) return ;

    return (
    <div className='col-span-1 p-2 px-4 shadow-md '>
        <ul>
            <li>Home</li>
            <li>Music</li>
            <li>Live</li>
            <li>Trending</li>
        </ul>

        <h1 className='mt-4 font-bold'>Subscription</h1>
        <ul>
            <li>Home</li>
            <li>Music</li>
            <li>Live</li>
            <li>Trending</li>
        </ul>

        <h1 className='mt-4 font-bold'>Expore</h1>
        <ul>
            <li>Home</li>
            <li>Music</li>
            <li>Live</li>
            <li>Trending</li>
        </ul>
    </div>
  )
}

export default Sidebar