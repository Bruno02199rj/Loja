import React, { useState } from 'react';
import Login from './pages/CreateUser';
import { AppRoutes } from './routes';

import { BrowserRouter , Link, Route,Routes } from "react-router-dom"
import Home from './pages/Home';
import CreateUser from './pages/CreateUser'
import Logado from './pages/Logado';
import Overview from './components/Overview';
import SalesOrders from './components/SalesOrders';
import CreateProduct from './components/CreateProduct';





function App() {


  return (
    
    
    <div className="App ">
     <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home/>}>
  
    
    </Route>
    
    
  <Route path='/users' element={<CreateUser/>}></Route>
     
  <Route path='/sessions/:user_id' element={<Logado/>}>
  <Route path="overview" element={<Overview/>}></Route>
  <Route path="orders" element={<SalesOrders/>}>

  </Route>
 
  <Route path='create' element={<CreateProduct/>}></Route>
  </Route>



   </Routes>

   
     </BrowserRouter>
       
       </div>
       

  );
}

export default App;
