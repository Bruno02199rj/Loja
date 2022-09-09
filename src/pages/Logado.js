import axios from "axios";
import React,{useEffect, useParams} from "react";

const Logado = () => {



    
    useEffect(() => {
        axios.get('/users/631259abfdf50b46a6518432') //pegar user id dinamicamente
        .then((res)=>{
            console.log(res)
        })
    }, []);




    return(
        <>
        <h1>Logado here</h1>
        </>
    )
}

export default Logado