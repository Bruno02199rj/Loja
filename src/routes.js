import { BrowserRouter , Link, Route,Router,Routes } from "react-router-dom"
import Home from './pages/Home';
import CreateUser from './pages/CreateUser'
import Logado from './pages/Logado';




export function AppRoutes(){
    return(
      <BrowserRouter>
      <Router>

      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<CreateUser/>}/>
      <Route  path='/sessions/:user_id' element={<Logado/>}>
     
      </Route>
      
      <Route path="b" element={<p>sdjsia</p>}/>
      

      </Router>
     
        
   <Routes>

    
      
        
  




   </Routes>

    
        
        </BrowserRouter>
   )
}