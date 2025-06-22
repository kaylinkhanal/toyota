import Card from '@/components/card/page'
import React from 'react'

const productList= [
    {id:1, name:'P9 Bluetooth Headphone', price:499, image:'/black-headphone.jpg'},
    {id:2, name:'Airpods Gen 3', price:40000, image:'/netflix_bg.jpg'}
]

const Home = () => {
  return (
    <div className='flex p-4 m-4 '>
    {
        productList.map((item, id)=>{
            return (
                <div key={id}>
                    <Card/>
                </div>
            )
        })
    }
    </div>
  )
}

export default Home