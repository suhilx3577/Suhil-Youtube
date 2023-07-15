import React from 'react'
import Comment from './Comment'

const CommentContainer = () => {

    const commentData = [
        {
            name:"Suhil D",
            text:"lorem ipsum shaka laka boom boom",
            replies:[
                {
                    name:"Suhil D",
                    text:"lorem ipsum shaka laka boom boom",
                    replies:[
        
                    ]
                },
            ]
        },
        {
            name:"Suhil D",
            text:"lorem ipsum shaka laka boom boom",
            replies:[

            ]
        },
        {
            name:"Suhil D",
            text:"lorem ipsum shaka laka boom boom",
            replies:[        {
                name:"Suhil D",
                text:"lorem ipsum shaka laka boom boom",
                replies:[        {
                    name:"Suhil D",
                    text:"lorem ipsum shaka laka boom boom",
                    replies:[
        
                    ]
                },        {
                    name:"Suhil D",
                    text:"lorem ipsum shaka laka boom boom",
                    replies:[        {
                        name:"Suhil D",
                        text:"lorem ipsum shaka laka boom boom",
                        replies:[        {
                            name:"Suhil D",
                            text:"lorem ipsum shaka laka boom boom",
                            replies:[
                
                            ]
                        },        {
                            name:"Suhil D",
                            text:"lorem ipsum shaka laka boom boom",
                            replies:[
                
                            ]
                        },
            
                        ]
                    },
        
                    ]
                },        {
                    name:"Suhil D",
                    text:"lorem ipsum shaka laka boom boom",
                    replies:[
        
                    ]
                },
    
                ]
            },

            ]
        },
        {
            name:"Suhil D",
            text:"lorem ipsum shaka laka boom boom",
            replies:[

            ]
        },
        {
            name:"Suhil D",
            text:"lorem ipsum shaka laka boom boom",
            replies:[        {
                name:"Suhil D",
                text:"lorem ipsum shaka laka boom boom",
                replies:[        {
                    name:"Suhil D",
                    text:"lorem ipsum shaka laka boom boom",
                    replies:[
        
                    ]
                },
    
                ]
            },        {
                name:"Suhil D",
                text:"lorem ipsum shaka laka boom boom",
                replies:[
    
                ]
            },

            ]
        },
        {
            name:"Suhil D",
            text:"lorem ipsum shaka laka boom boom",
            replies:[        {
                name:"Suhil D",
                text:"lorem ipsum shaka laka boom boom",
                replies:[
    
                ]
            },        {
                name:"Suhil D",
                text:"lorem ipsum shaka laka boom boom",
                replies:[
    
                ]
            },

            ]
        },
        {
            name:"Suhil D",
            text:"lorem ipsum shaka laka boom boom",
            replies:[

            ]
        },
    ]
  return (
    <div>
        <h1 className='text-3xl font-bold'>Comments</h1>
        <div className='px-5 p-2'>
            <Comment data={commentData[0]}/>
        </div>
    </div>
  )
}

export default CommentContainer