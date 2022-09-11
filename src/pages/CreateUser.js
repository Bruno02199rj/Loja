import axios from "axios";
import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom"
import logo01 from '../assets/logo01.jpg'


const Login = () => {

const [userCredentialsA , setUserCredentialsA] = useState('')
const [userCredentialsB, setUserCredentialsB] = useState('')
const [LoginId, setLoginId] = useState('')
const [Id, setId] = useState('')



useEffect(() => {
  axios.get('/users').then(res=>{
    setUserCredentialsA(res.data[0].username)
    setUserCredentialsB(res.data[0].password)
    setId(res.data[0]._id)
  })
}, []);

const handleInputValuesA = (e) =>{

  if(e.target.value == 'lotus01' ){
    
    setUserCredentialsA(e.target.value)
    
  }else{
    
    console.log('user error')
  }
  
}

const handleInputValuesB = (e) => {
  if(e.target.value == '1301'){
    
    setUserCredentialsB(e.target.value)
    setLoginId(Id)
    
  }else{
    console.log('pass error')
  }
}

  return(
    <>
  <div class="flex h-screen justify-center bg-[#E5E5E5] ">
  

    <div className="h-max w-64 bg-gray-700 rounded-xl mt-16">

    <figure className=" mt-2  ">
                    <img className="h-32 mx-16 rounded-full" src={logo01}/>
                </figure>

<h1 className="mt-6 ml-2 text-sky-400/100">Username</h1>

<input className="mt-1 block w-60 mx-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" onChange={(e) => handleInputValuesA (e)}  type='text' placeholder="username"></input>
<br></br>

<h1 className="mt-4 ml-2 text-sky-400/100">Password</h1>
<input className="mt-1 block w-60 mx-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" onChange={(e) => handleInputValuesB (e)} type='password' placeholder="pass"></input>
<br></br>
<button className="mt-8 w-32 bg-cyan-400 mx-16 mb-12 rounded-2xl hover:scale-125 hover:transition ease-in-out delay-150  hover:bg-green-200"><Link  to={'/sessions/'+LoginId} state={{ from: LoginId }}>LOGIN</Link></button>
    </div>

</div>




    </>
  )

}

export default Login