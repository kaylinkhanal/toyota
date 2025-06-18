import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
        <div className='flex
         flex-col
         gap-2
        bg-white
        shadow-2xl 
        border-2 border-gray-600 m-4 p-4  justify-center items-center'>
                <img src="/apple.png" width={100} height={100}/>
                <input   placeholder='Email'/>
                <input  placeholder='password' type='password'/>
                <button className='bg-black p-2 m-2 text-white w-full'>Login</button>
        </div>
    </div>
  )
}

export default Login