import React from "react";

const Users = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        backgroundColor: "#f0f0f0", 
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid black",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          style={{ border: "1px solid black", margin: "10px", padding: "10px", width: "250px" }}
        />
        <input
          type="text"
          placeholder="Enter your address"
          style={{ border: "1px solid black", margin: "10px", padding: "10px", width: "250px" }}
        />
        <input
          type="text"
          placeholder="Enter your number"
          style={{ border: "1px solid black", margin: "10px", padding: "10px", width: "250px" }}
        />
        <input
          type="text"
          placeholder="Enter your email"
          style={{ border: "1px solid black", margin: "10px", padding: "10px", width: "250px" }}
        />
        <input
          type="text"
          placeholder="Enter your password"
          style={{ border: "1px solid black", margin: "10px", padding: "10px", width: "250px" }}
        />
        <button style={{border:'1px solid black',padding:'10px',borderRadius:'15px',backgroundColor:'blue',color:'white'}}>Submit</button>
      </div>
    </div>
  );
};

export default Users;
