import axios from "axios";
import React,{useEffect, useState} from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"

import { BiChip } from "react-icons/bi";
import logo01 from '../assets/logo01.jpg'
import { BsCartPlusFill } from "react-icons/bs"
import { FaMoneyCheckAlt, FaTrash, FaUsersCog } from "react-icons/fa"
import { MdSettingsInputComposite } from "react-icons/md"


const Logado = () => {
 

    return(
        <>
        <div className="flex h-screen  ">

            <aside className="w-2/12 bg-blue-900 h-screen"> 
             <figure><img className="h-32 inline-block mt-4 mx-10 rounded-full" src={logo01}/></figure>   

             <menu className="inline-block mt-12 mx-4 ">
            <div className="w-56 h-8 hover:bg-white hover:rounded transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><BiChip size={30} className=" mr-2 "></BiChip><Link  to='overview'>Overview</Link></li>
            </div>
            <div className="w-56 h-8 hover:bg-white hover:rounded transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><BsCartPlusFill size={30} className="mr-2"></BsCartPlusFill><Link  to='create'>cadastrar</Link></li>
            </div>
            <div className="w-56 h-8 hover:bg-white hover:rounded transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><FaMoneyCheckAlt size={30} className=" mr-2"></FaMoneyCheckAlt><Link  to='orders'>Pedidos</Link></li>
            </div>
            <div className="w-56 h-8 hover:bg-white hover:rounded transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><FaTrash size={30} className=" mr-2"></FaTrash>Excluir Produto</li>
            </div>
            <div className="w-56 h-8 hover:bg-white hover:rounded transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><FaUsersCog size={30} className=" mr-2"></FaUsersCog>Users</li>
            </div>
            <div className="w-56 h-8 hover:bg-white hover:rounded transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><MdSettingsInputComposite size={30} className=" mr-2"></MdSettingsInputComposite>Configuração</li>
            </div>          
            
            


          
         </menu>       

        
        

             </aside>
           
     
            <Outlet/>      
   
        </div>

       
        </>
    )
}

export default Logado