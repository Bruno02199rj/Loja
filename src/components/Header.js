import logo01 from '../assets/logo01.jpg'
import { Link } from "react-router-dom"
import {BsFillCartPlusFill} from "react-icons/bs"

const Header = ({acao}) =>{
 
    
    return(
        
        <div className={ `  w-full mt-2 ${acao? ' text-slate-500 z-50' : ''}`}>
      
        <figure className="inline-block ">
                       <img className="h-max ml-12 rounded-full bg-[#ebd96b]" src={logo01}/>
                   </figure>
                  
               <header className=" mt-8 inline w-full h-8 bg-red-400">
              
                  <nav className=" md:flex   hidden   h-8 w-max mr-12 mt-14 float-right inline-block">
                   <ul className="flex">
                       <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>CATALOGO</a></li>
                       <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>FASHION</a></li>
                       <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>FAVORITOS</a></li>
                       <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>LIFESTYLE</a></li>
                       
                       <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><Link to='/users'>ADMIN</Link></li>
                      
                   </ul>
                  </nav>
               </header>
           </div>
    )
}

export default Header