import { Outlet } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import ListProduct from "../components/ListProduct";


const Overview = () => {

  useEffect(() => {
    axios.get('/products').then(res=>{
        console.log(res)
      })
    }, []);




    return (
        
      <>
       

         
<section className="w-full  h-screen bg-gray-300 ">
<h3  className="ml-12 mt-2 font-bold text-xl text-black"></h3>
  <div className="h-4/5 w-11/12 mx-12 rounded-md  bg-white mt-2 inline-block">
  <ListProduct/>
  </div>

</section>

      </>
        
            
        
      
    )
}

export default Overview