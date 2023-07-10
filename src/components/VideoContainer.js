import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { YOUTUBE_API_URL } from '../constants'
const VideoContainer = () => {

    const [ video, setVideo] = useState([])

    useEffect(()=>{
        getVideoData();
    },[])

    const getVideoData= async () => {
        const data = await fetch(YOUTUBE_API_URL)
        const json =  await data.json()
        setVideo(json.items)
    }

    if(video.length < 1) return <h1>Loading</h1>
  return (
      <div className='flex flex-wrap'>
        {
            video.map((v,i)=> <Videocard info={v} key={i}/>)
        }
    </div>
  )
}

export default VideoContainer