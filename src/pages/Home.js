import { useEffect, useState } from 'react';


import Main from '../components/Main';
import Collection from '../components/Collection';
import Brands from '../components/Brands';
import logo01 from '../assets/logo01.jpg'
import { Link } from "react-router-dom"

import { Outlet } from "react-router-dom"
import Header from '../components/Header';
import Footer from '../components/Footer';
import SwiperMostAcessed from '../components/SwiperMostAcessed';



var baseUrl = 'http://localhost:3001'


function Home(){
    return(
        <>
    
     <Header/>
    
<Collection/>
      <Footer/>
        </>
        
    )
   
}

export default Home