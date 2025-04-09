import React, { useState } from 'react'
import axios from 'axios';
const Login = () => {
  const [emailId,setemail] = useState("Rohit@gmail.com");
  const [password, setpassword] = useState("Rohit@12345");

  const handleClick = async()=>{
    try{
      const res = await axios.post("http://localhost:3000/login",{
        emailId,
        password
      },{withCredentials:true})
    }
    catch(err){
      console.error(err);
    }
      
  }
  return (
    <div className="flex justify-center my-10">
    <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <div className="p-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID</span>
            </div>
            <input
              type="text"
              value={emailId}
              className="input input-bordered w-full max-w-xs mb-5"
              onChange={(e)=>setemail(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onChange={(e)=>setpassword(e.target.value)}
            />
          </label>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Login