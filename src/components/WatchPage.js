import React from 'react'
import {useSearchParams} from 'react-router-dom'
const WatchPage = () => {

  const [params] = useSearchParams();
  return (
    <div className='col-span-11 ml-4'>
      <iframe width="800" height="500" src={`https://www.youtube.com/embed/${params.get('v')}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage