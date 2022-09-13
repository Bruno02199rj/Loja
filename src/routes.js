import { BrowserRouter , Link, Route,Routes } from "react-router-dom"
import Home from './pages/Home';
import CreateUser from './pages/CreateUser'
import Logado from './pages/Logado';




export function AppRoutes(){
    return(
      <BrowserRouter>
        <Routes>
    
   <Routes>

    <Route path='/' element={<Home/>}></Route>
    
      <Route path='/users' element={<CreateUser/>}></Route>
        
  <Route exact path='/sessions/:user_id' element={<Logado/>}>
  <Route exact path='a' element={<h1>dsadsadsa</h1>}></Route>
  </Route>



   </Routes>



  

   
    
       
        </Routes>
        </BrowserRouter>
   )
}