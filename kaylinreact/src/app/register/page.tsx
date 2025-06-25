import React from 'react'

const page = () => {
  return (
    <div style={{border:'1px solid black', margin: 10, padding:10, borderRadius: 10, display:'flex',
         flexDirection: 'column',
         justifyContent:'center',
         alignItems:'center',
    }}>
        <h1 style={{fontSize:24, fontStyle: 'italic'}}>Bolt</h1>
        <img src="/logo2.png" width={100} height={100} alt='logo'/>
        <input placeholder='enter your name'  className="input-placeholder"/>
        <input placeholder='enter phone number'  className="input-placeholder"/>
        <input placeholder='enter password'  className="input-placeholder"/>
        <input placeholder='confirm password' className="input-placeholder"/>
        <button style={{backgroundColor:'pink', padding:4}}>Register</button>
    </div>
  )
}

export default page