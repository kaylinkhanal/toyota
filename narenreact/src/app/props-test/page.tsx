import React from 'react'
const A = (props) => {
  return (
    <div>
        <B chocolate ={props.chocolate} price = {props.price}/>
        <X/>
    </div>
  )
}
const X = (props) => {
    return (
        <div>
            Hello
        </div>
    )
}

const C = () => {
    return (
        <div>
           <A chocolate="Kitkat" price={30} />
           <A chocolate="Dairy Milk" price={50} />
           <M/>
        </div>
    )
}

const M = () => {
    return (
        <div>
            <h1>Home about contact</h1>
        </div>
    )
}

const B = (props) => {
  return (
    <div>
        I love {props.cholcolate} of price {props.price}!
    </div>
  )
}
export default C;