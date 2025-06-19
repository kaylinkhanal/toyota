import React from 'react'


const A = (props) => {
    return (
      <div>
        <B cholcolate={props.chocolate} price={props.price}/>
        <X/>
      </div>
    )
  }

  const X = (props) => {
    return (
      <div>
      hello
      </div>
    )
  }



const C = () => {
    return (
        <div>
        <A chocolate="kitkat" price={30}/>
        <A chocolate="dairy milk" price={130}/>
        <M/>
        </div>
    )
}

const M = () => {
    return (
        <div>
        <h1>home about contact</h1>
     
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

export default C


// props drilling -
// 


// props-> parent sends data to child
// flow-> unidirectional 
