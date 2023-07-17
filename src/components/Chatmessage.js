import React from 'react'

const Chatmessage = ({name,message}) => {
    return (  
        <div className='flex p-2 px-4 gap-2 items-center bg-slate-100 shadow-sm rounded-lg whitespace-nowrap'>
            <img className='h-6 w-6' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="user Icon" />
            <span className='font-bold text-sm'>{name}</span>
            <span className='text-sm '>{message}</span>
        </div>
    )
}

export default Chatmessage