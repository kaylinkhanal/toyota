function login(){
  return (
     <div style={{backgroundColor: 'cyan', width:'400px', height: '300px', color: 'black', display: 'flex', flexDirection: 'column', margin:'25px', padding:'25px'}}>
      <h1 style= {{textAlign:'center', fontWeight:'bold'}}>Register</h1>
       <label>UserName:</label>
        <input type="text" style={{height:'30px', width: '150px', border: '1px solid black'}}/>
        <label>Email:</label>
        <input type="email" style={{height:'30px', width: '150px', border: '1px solid black'}}/>
        <label>Password:</label>
        <input type="password" style={{height:'30px', width: '150px', border: '1px solid black'}}/>

        <button style={{height:'30px', width: '150px', backgroundColor: 'black', color:'white', cursor: 'pointer', marginTop: '10px'}}>Register</button>
    </div>
  )
}

export default login