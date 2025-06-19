// rafce
import React from 'react'

const Register = () => {
  return (
    <div style={{backgroundColor : "#cfffea", margin: 100, marginLeft: 300, padding: 30, display: 'flex', flexDirection: "column", justifyContent: "center", alignContent : "center", width: 300}}>
      <h2 style={{ textAlign: "center"}}> Register</h2>
      <input style={{margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#afffe1",
      }}
      placeholder='Enter you name'></input>

      <input style={{margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#afffe1",
      }}
      placeholder='Enter number'></input>

      <input style={{margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#afffe1",
      }}
      placeholder='Enter password'></input>

      <input style={{margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#afffe1",
      }}
      placeholder='Confirm password'></input>

      <button 
       style={{backgroundColor:"#a2ffdc",
      margin: 10,
        padding: 10,
        borderRadius: 10, width: 100}}>
          Register</button>
    </div>
  )
}

export default Register