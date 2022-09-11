import React from "react";
import {
  BrowserRouter as Router,
    Routes,
  Route
} from "react-router-dom";
import Login from "./pages/CreateUser";
import Home from "./pages/Home";
import Logado from "./pages/Logado";



export function AppRoutes(){
    return(
        <Router>
           <Routes>
            
              <Route path="/" element={<Home/>} />
              <Route path='/users' element={<Login/>} />
              <Route path="/sessions/:user_id" element={<Logado />  } />

           </Routes>
        </Router>
   )
}