import axios from "axios";
import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

const Login = () => {

  const [userData, setUserData] = useState([])
  const [LoginId,setLoginId] = useState('')
  const [usernameid, setUsernameId] = useState([])
  const [eldata, setElData] = useState('')
  const [users,setUsers] = useState('')



 
    useEffect(() => {
        axios.get('/users').then(res=>{
       
          setUserData(res.data)
          setUsers(res.data)

        
    
          
        })
        
    }, [setUserData]);

    

 
    const handleInputLogin = (e) =>{

      
      if(e.keyCode == 13){
        const LoginValue = e.target.value
        
        setUsernameId(LoginValue)
      console.log(usernameid)
      
    }else{
      console.log('err')
    }

    }
   
  
   


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
    
    
 


    const t = (object) =>{
      let result = []
      for(key of Object.keys(object)){
        result.push([key,Object[key]])
      }
     

      const clienteNameId = usernameid
      const serverNameId = users
      const IdUser = eldata

     if(clienteNameId == serverNameId){
     setLoginId(IdUser)
      console.log('logado')
     }else{
      console.log(clienteNameId + ' err 86||' + serverNameId  )
      
     }

  

    }
   



    return (
      <>
        <h1>criar user</h1>
        
        <input type='text' onKeyDown={(e) => handleInputChange(e)}></input>
        <input type='password'></input>
       
        <button  onClick={(e) => addPost(e.preventDefault)}><a href="/users">send</a></button>

<div>
        <input onKeyDown={(e) => handleInputLogin(e)} type='text' placeholder="email"></input>
        <input type='password'></input>
       
       
        <Link to={LoginId} state={{ from: LoginId }}>LOGIN</Link>
      <button onClick={() => t()}>t function</button>
      <br></br>
    
</div>
      </>
    )
}


export default Login