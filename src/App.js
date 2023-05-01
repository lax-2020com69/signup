import React from "react";

import Register from "./register";
import Login from "./login";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from "./dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
