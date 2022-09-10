import axios from "axios";
import React,{useEffect, useState} from "react";

import { useLocation } from 'react-router-dom'


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
        <h1 >logado : {usery}</h1>
        
        </>
    )
}

export default Logado