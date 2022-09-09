import React from "react";
import {
  BrowserRouter as Router,
    Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Logado from "./pages/Logado";

var baseUrl = 'http://localhost:3001'

export function AppRoutes(){
    return(
        <Router>
           <Routes>
            
              <Route path="/" element={<Home/>} />
              <Route path='/users' element={<Login/>} />
              <Route path="/users/:user_id" element={<Logado/>} />

           </Routes>
        </Router>
   )
}