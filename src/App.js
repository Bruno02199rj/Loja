import React from 'react';
import Login from './pages/CreateUser';
import { AppRoutes } from './routes';
import { BrowserRouter , Link, Route,Routes } from "react-router-dom"
import Home from './pages/Home';
import CreateUser from './pages/CreateUser'
import Logado from './pages/Logado';
import Overview from './components/Overview';
var baseUrl = 'http://localhost:3001'


function App() {

  return (
    
    
    <div className="App">
     <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home/>}></Route>
    
      <Route path='/users' element={<CreateUser/>}></Route>
      
  <Route path='/sessions/:user_id' element={<Logado/>}>
  <Route path="a" element={<Overview/>}></Route>
  </Route>



   </Routes>



  

   
     </BrowserRouter>
       
       </div>
       

  );
}

export default App;
