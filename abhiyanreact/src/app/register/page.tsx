import React from 'react'

const register = () => {
  return (
    <div className='w-full min-h-screen bg-[url("/netflix_bg.jpg")]'>
      <div className='bg-black w-[400px] h-[500px] text-black flex flex-col p-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-[25px] border-none'>
        <h1 className='text-3xl font-bold mb-[20px] text-white'>Sign In</h1>
        <input type="text" placeholder="Email or Mobile Number" className='border border-gray-300 mb-[20px] h-[45px] focus:outline-none placeholder-gray-300 p-3 text-white' />
        <input type="password" placeholder="Password" className='border border-gray-300 mb-[5px] h-[45px] focus:outline-none placeholder-gray-300 p-3 text-white' /><br />
        <button className='h-[40px] bg-red-500 text-white hover:bg-gray-200 hover:text-black hover:transition duration-300 cursor-pointer p-1 font-bold '>Sign In</button>
        <label className='text-center text-gray-400 m-[20px]'>OR</label>
        <button className='h-[40px] font-bold bg-gray-400 text-white hover:bg-gray-200 hover:text-black hover:transition duration-300 cursor-pointer p-1'>Use a Sign-in Code</button>
        <label className='underline font-bold text-white m-[20px] text-center cursor-pointer'>Forgot Password?</label>

        <div className='flex'>
          <input type="checkbox" className='w-[18px] cursor-pointer' />
          <label className='text-white ml-[10px]'>Remember me</label>
        </div>

      </div>
    </div>
  )
}

export default register