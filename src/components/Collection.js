
import React, {useEffect,useState} from "react";


import api from "../Api/api";

const Collection = () =>{

    const [eldata, setData] = useState([])
    const [itensPerPage, setItensPerPage] = useState(5)
    const [currentPage,setCurrentPage] = useState(0)

    const pages = Math.ceil(eldata.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = eldata.slice(startIndex, endIndex)

    useEffect(() => {
      api.get('/products').then(res=>{
            setData(res.data)
           
        })
    }, [setData]);

   
    

    return(
       
        <section className="  h-screen  ml-12 mr-1  flex">
            <div  className=" mt-10   inline-block w-6/6   h-52">

            <blockquote class="   mb-12 text-2xlfont-bold mx-12 italic text-center text-slate-900">
                    When you look
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span class="relative text-white">annoyed</span>
                    </span>
                    all the time, people think that you're busy.
                    </blockquote>

                <div className="mx-12 relative left">
                    {Array.from(Array(pages), (item , index) =>{

                        return <button  value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}className="px-4  mr-4 bg-black text-white hover:scale-125 rounded justify-content align-center">{index + 1}</button>
                    })}
                
                </div>
                {
                   currentItens?.map((event)=>{
                    return(
                        
                        <div className="  bg-[#f4f6f5] rounded-xl mt-10 inline-block  ml-12 h-80">
                        <img className="w-48 h-32" src={event?.productImage}></img>
                       
                       <p className="text-fuchsia-700 font-bold mx-12 mt-2">Cor: {event?.productDescription}</p>
                        <p className="text-fuchsia-700 font-bold mx-12 mt-2"> Tamanho: M</p>
                        <span class="mt-24 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span  class="relative text-white"><p className="px-8 ">R$: {event?.productPrice}</p></span>
                        </span>
                        </div>
                        
                        
                    )
                   })
                }
                
            </div>
          
         
        </section>
       
    )
}

export default Collection