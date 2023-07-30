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

    const CommentList = ({comments}) => {
        return (
            comments.map((comment,i)=>(
            <div>
                 <Comment key={i} data={comment}/>
                 <div className='pl-5 border border-l-black ml-5'>
                    <CommentList comments={comment.replies}/>
                 </div>
            </div>
        )))
    }
  return (
    <div className='w-4/5'>
        <h1 className='text-3xl font-bold'>Comments</h1>
        <div className='px-5 p-2 '>
            <CommentList comments={commentData}/>
        </div>
    </div>
  )
}

export default CommentContainer