import axios from "axios";
import React,{useEffect, useState} from "react";
import logo01 from '../assets/logo01.jpg'
import { useLocation } from 'react-router-dom';

import { BiChip } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs"
import { FaMoneyCheckAlt, FaTrash, FaUsersCog } from "react-icons/fa"
import { MdSettingsInputComposite } from "react-icons/md"


const Logado = () => {
    const [usery,setUserY] = useState('')
    const location = useLocation();
    const { from } = location.state;




    
    useEffect(() => {
        axios.get('/users/'+from) //pegar user id dinamicamente
        .then((res)=>{
            setUserY(res.data.username)
            console.log(res)
        })
    }, []);


     

    
    


    return(
        <>
   
            <aside className="w-2/12 bg-black h-screen"> 
             <figure><img className="h-32 inline-block mt-4 mx-10 rounded-full" src={logo01}/></figure>   

             <menu className="inline-block mt-12 ">
            <div className="w-56 h-8 hover:bg-gray-800 transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><BiChip size={30} className=" mr-2 "></BiChip>Overview</li>
            </div>
            <div className="w-56 h-8 hover:bg-gray-800 transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><BsCartPlusFill size={30} className="mr-2"></BsCartPlusFill>Cadastrar</li>
            </div>
            <div className="w-56 h-8 hover:bg-gray-800 transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><FaMoneyCheckAlt size={30} className=" mr-2"></FaMoneyCheckAlt>Finanças</li>
            </div>
            <div className="w-56 h-8 hover:bg-gray-800 transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><FaTrash size={30} className=" mr-2"></FaTrash>Excluir Produto</li>
            </div>
            <div className="w-56 h-8 hover:bg-gray-800 transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><FaUsersCog size={30} className=" mr-2"></FaUsersCog>Users</li>
            </div>
            <div className="w-56 h-8 hover:bg-gray-800 transition duration-150 ease-out hover:ease-in ">
            <li className="text-white mt-8 flex inline-block hover:text-rose-800"><MdSettingsInputComposite size={30} className=" mr-2"></MdSettingsInputComposite>Configuração</li>
            </div>          
                 
                  
                </menu>             
             </aside>
   

        
        </>
    )
}

export default Logado