import Post from '@/components/socialmedia_post/page'
import React from 'react'

const data= [
    {id:1, username:'abhiyan1977', post:'/mern_skills.jpg', pfp:'/pgp.jpg'},
    {id:2, username:'heroktamerobhai' ,post:'/netflix_bg.jpg', pfp:'https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg'},
    {id:3, username:'heroinemeroaunty', post:'/black-headphone.jpg', pfp:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'}
]
const Insta = () => {
  return (
    <div className='flex flex-col absolute transform -translate-x-[50%] left-[50%] '>
        <h1 className='text-4xl font-bold text-center m-[10px] border border-white rounded-[25px] hover:bg-white hover:text-black cursor-pointer duration-100'>SastoGram</h1>
        
        {data.map((item,index)=>{
            return(
                <div key={index}>
                    <Post element={item}/>
                </div>
            )
        })}
    </div>
  )
}

export default Insta