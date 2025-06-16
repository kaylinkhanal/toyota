import React from 'react'
// task to making the login page attractive and responsive
const naren= () => {
  return (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px',margin:'10px', backgroundColor: '#f0f0f0', }}>
      <form action="">
        <div style= {{border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style = {{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: '#333'}}>Login page</h1>
        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', width: '200px',margin: '10px' }}>
          
          <label style={{ marginBottom: '5px', fontSize: '14px', color: '#555' }}>Username</label>

          {/* Placeholder text for username input */}
          {/* Input field for username */}

          <input type="text" placeholder="Enter your username" style={{marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}} />
        </div>

        
        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', width: '200px',margin: '10px' }}>
          <label style={{ marginBottom: '5px', fontSize: '14px', color: '#555' }}>Password</label>

          {/* Placeholder text for password input */}
          {/* Input field for password */}
        </div>
        <input type="password" placeholder="Enter your password" style={{marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}} />
        
        {/* Submit button */}
        <button type="submit" style={{border: '1px solid #ccc', borderRadius: '4px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer', marginTop:'10px',alignItems: 'center'}}>Login</button>
        </div>
      </form>
     </div>
  )
}

export default naren