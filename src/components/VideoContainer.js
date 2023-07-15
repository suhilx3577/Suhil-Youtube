import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import {Link} from 'react-router-dom'

const VideoContainer = () => {

    const [ video, setVideo] = useState([])

    useEffect(()=>{
        getVideoData();
    },[])

    const getVideoData= async () => {
        const data = await fetch(process.env.REACT_APP_YOUTUBE_API_URL);
        const json =  await data.json()
        setVideo(json.items)
        // console.log(json)
    }

    if(video.length < 1) return <h1>Loading</h1>
  return (
      <div className='flex flex-wrap'>
        {
            video.map((v,i)=> <Link  key={i} to={'/watch?v='+ v.id}><Videocard info={v} key={i}/></Link>)
        }
    </div>
  )
}

export default VideoContainer