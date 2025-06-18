import Card from '@/components/card/page'
import React from 'react'
const productList = [
    {id: 12, name: 'Hawkins cooker', price: 1500, image: 'img.jpeg'},
    {id: 13, name: 'Baltra cooker', price: 2000, image: 'logo2.png'},
]
const Home = () => {
    const name = 'ram'
  return (
    <div>
        {productList.map((item, id)=>{
           return( <div key={id}>
                  <Card item={item}/>
                </div>)
            })}
    </div>
  )
}

export default Home