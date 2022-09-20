import { Outlet } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import ListProduct from "../components/ListProduct";


const Overview = () => {

const [state,setState] = useState({})

var baseUrl = 'http://localhost:3001'

  useEffect(() => {
    axios.get('/products').then(res=>{
        console.log(res)
      })
    }, []);





    return (
        
          <div className=" h-screen w-screen">
          <h1 className="mt-2 ml-4">visão geral</h1>
           <div className="h-32 w-full   flex">
          
                <div className=" w-3/12 p-6 h-26  mx-4 border-2 border-rose-500 inline-block">
                    <div className="w-max mx-14 ">

                  <h1 className="    ">PRODUTO</h1>
                  <br></br>
                  <h1 className="    w-max mx-8">33</h1>
                    </div>
                </div>
                <div className=" w-3/12 p-6 h-26  mx-4 border-2 border-rose-500 inline-block">
                    <div className="w-max mx-14 ">

                  <h1 className="    ">PRODUTO</h1>
                  <br></br>
                  <h1 className="    w-max mx-8">33</h1>
                    </div>
                </div>
                <div className=" w-3/12 p-6 h-26  mx-4 border-2 border-rose-500 inline-block">
                    <div className="w-max mx-14 ">

                  <h1 className="    ">PRODUTO</h1>
                  <br></br>
                  <h1 className="    w-max mx-8">33</h1>
                    </div>
                </div>
                <div className=" w-3/12 p-6 h-26  mx-4 border-2 border-rose-500 inline-block">
                    <div className="w-max mx-14 ">

                  <h1 className="    ">PRODUTO</h1>
                  <br></br>
                  <h1 className="    w-max mx-8">33</h1>
                    </div>
                </div>
           </div>

           <section className="w-full bg-red-200 h-60 mt-16">
                <h1>Gráfico</h1>
            </section>

            <section className="w-full  h-max mt-2">
            <ListProduct/>
            </section>
          </div>
            
        
      
    )
}

export default Overview