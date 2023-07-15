import React from 'react'
import {useSearchParams} from 'react-router-dom'
import CommentContainer from './CommentContainer';
const WatchPage = () => {

  const [params] = useSearchParams();
  return (
    <>
    <div className='flex flex-col col-span-11' >
      <div className=' ml-4 mt-4'>
        <iframe width="800" height="500" src={`https://www.youtube.com/embed/${params.get('v')}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <hr  className='mt-2'/>
      <div className='ml-4 mt-4'>
        <CommentContainer/>
      </div>
    </div>
    </>

  )
}

export default WatchPage