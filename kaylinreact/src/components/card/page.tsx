import React from 'react'

const Card = (props) => {
  return (
    <div className='shadow-sm p-4 m-4 w-72'>
        <img src={props.item.image} alt="Card Image" width={100} height={100}/>
       {props.item.name}
        price:        {props.item.price}
    </div>
  )
}

export default Card