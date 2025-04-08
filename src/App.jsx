import React from 'react'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile"
import Body from './Body';
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path ="/login" element={<Login/>}/>
          <Route path = "/profile" element={<Profile/>}/>
        </Route>    
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App