import axios from "axios";
import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

const Login = () => {

  const [userData, setUserData] = useState('')
  const [userid, setUserId] = useState([])
  const [eldata, setElData] = useState('')
  var cores = ['vermelho', 'verde', 'azul'];
  console.log(userid)


    useEffect(() => {
        axios.get('/users').then(res=>{
          setUserData(res)
          setUserId(res)
      
          
        })
        
    }, [setUserData]);

   
   
  



    const handleInputChange = (e) =>{
       

      if(e.keyCode == 13){
        const value = e.target.value
        setElData({
          username: value
        })
         console.log(eldata) 
      }else{
        console.log('err')
      }

    }


    const addPost = () =>{

      axios.post('/users',eldata)
       .then(()=>{
         console.log('deu certo')
       })
       .catch((err)=>{
         console.log('errore' + err )
       })
    }
    



    return (
      <>

        
        <input type='text' onKeyDown={(e) => handleInputChange(e)}></input>
        <input type='password'></input>
       
        <button  onClick={(e) => addPost(e.preventDefault)}><a href="/users/:user_id">send</a></button>
      </>
    )
}


export default Login