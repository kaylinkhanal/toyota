import React from 'react'

const Card = () => {
  return (
    <div className='shadow-sm bg-white w-[250px] h-[400px] p-[10px] flex flex-col m-3'>
      <img src="/black-headphone.jpg" alt="Headphones" className='w-[250px] w-[100px] mb-[10px] border border-black'/>
      <label className='text-black font-bold'>P9 Bluetooth Headphone</label>
      <span className='text-black line-through'>Price: Rs. 699</span>
      <span className='text-black'>Price: Rs. 499</span><br/>
      <button className='bg-green-200 text-black h-[35px] cursor-pointer font-bold hover:bg-red-300'>Add to Cart</button>
    </div>
  )
}

export default Card