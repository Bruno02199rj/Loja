import { useEffect, useState } from 'react';


import Main from '../components/Main';
import Collection from '../components/Collection';
import Brands from '../components/Brands';
import logo01 from '../assets/logo01.jpg'
import { Link } from "react-router-dom"

import { Outlet } from "react-router-dom"
import Header from '../components/Header';
import Footer from '../components/Footer';



var baseUrl = 'http://localhost:3001'


function Home(){

    const [activeColor, setActiveColor] = useState()


   
      useEffect(() => {
       
        function ScrollPosition(){
        if(window.screenY <= 30){
            console.log(window.screenY)
        setActiveColor(true)

       }else if(window.screenY = 0 ){
        
        setActiveColor(false)
       } 
    }
       window.addEventListener('scroll',ScrollPosition)
      }, []);  


    return(
        <>
         <Header acao={activeColor}/>
     
       
        <Collection/>
        </>
        
    )
   
}

export default Home