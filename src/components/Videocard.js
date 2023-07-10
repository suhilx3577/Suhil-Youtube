import React from 'react'

const Videocard = ({info}) => {
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails} = snippet
    const {viewCount,likeCount} = statistics

  return (
    <div className='p-2 px-4 w-80 shadow-md mx-4 my-2'>
        <img src={thumbnails.medium.url} alt="thumbnail" />
        <h1 className='font-bold mt-2'>{title}</h1>
        <ul className=''>
            <li>{channelTitle}</li>
            <li>{viewCount} Views</li>
            <li>{likeCount} Likes</li>
        </ul>
    </div>
  )
}

export default Videocard