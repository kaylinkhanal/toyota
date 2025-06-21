import React from 'react'

const Register = () => {
  return (
    <form
      style={{
        backgroundColor: 'white',
        fontFamily: 'Satoshi',
        margin: 15,
        padding: 10,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
      }}
    >
      <img src="/company.png" alt="Logo" style={{ width: 100, height: 100, marginBottom: 20 }} />
      <h1 style={{font: 'Inter', fontSize: 24, marginBottom: 20 }}>Register</h1>
      <input placeholder="Enter your name" type="text" />
      <input placeholder="Enter your email" type="email" />
      <input placeholder="Enter your password" type="password" />
      <input placeholder="Confirm password" type="password" />
      <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: 4 }}>
        Submit
      </button>
    </form>
  )
}

export default Register
