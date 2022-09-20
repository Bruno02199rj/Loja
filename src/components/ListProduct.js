import axios from "axios";
import { useEffect, useState } from "react";
import {AiOutlineLoading3Quarters, AiOutlineCaretRight} from "react-icons/ai"
import {TiTag} from "react-icons/ti"
import {FaLockOpen} from "react-icons/fa"
import {FiCheck} from "react-icons/fi"
import {MdOutlinePriceCheck,MdInvertColors, MdProductionQuantityLimits} from "react-icons/md"



const ListProduct = () => {

    const [ProductData, setProductData] = useState([])
    const [ProductPatchQuantity, setProductPatchQuantity] = useState()
    const [ProductPatchPrice, setProductPatchPrice] = useState()
    const [ProductPatchName, setProductPatchName] = useState()
    const [ProductId, setProductId] = useState('')
    const [showThis, setShowThis] = useState()
    const [showThisOk, setShowThisOk] = useState();

    const [itensPerPage, setItensPerPage] = useState(4)
    const [currentPage,setCurrentPage] = useState(0)

    const pages = Math.ceil(ProductData.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = ProductData.slice(startIndex, endIndex)

 
  

    useEffect(() => {
        axios.get('/products').then(res=>{
        
            setProductData(res.data)
          
          })
        }, [setProductData]);


        
const handleEditProducts = () =>{
   
    const data = {
       
        productQuantity : ProductPatchQuantity,
        productPrice : ProductPatchPrice,
        productName : ProductPatchName
      
    }
   
    

    const url = '/products/63259abfdf50b46a6518432/'+ProductId //pegar url do produto dinamicamente

    axios.patch(url,data,{
        headers: {
            'authentication': '63259abfdf50b46a6518432'
          }
    })
    .then((res)=>{
        setShowThisOk(true)
      console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
            
   
}





const getId = (event,index) =>{

    setProductId(event._id, [index])
        
    console.log(ProductId)
}


const handleShowEdit = () =>{

setShowThis(true)



}
    return (
        <>

        <div className="w-full h-full  ">

            
           {
        currentItens?.map((event,index)=>{
           
          return (
            <div className="h-full py-2 hover:bg-cyan-200 rounded w-full my-4 flex ">
                <img  className="w-32  h-32" src={event?.productImage}></img>
            
            <div className="  mx-2 ">
            <h1 className="w-max flex"><TiTag className="mr-2"/>{event?.productName}
          
            </h1>
             
            <h1 className="flex"><MdOutlinePriceCheck className="mr-2"/> R$ {event?.productPrice}</h1>
            <h1 className="flex"><MdInvertColors className="mr-2"/>{event?.productDescription}</h1>
            
            <h1 className="flex"><MdProductionQuantityLimits className="mr-2"/> {event?.productQuantity}</h1>  
            
           

            </div>
           
          
            {
                showThis 
                ?   <div className="mt-2 mx-2 h-6 flex"> <input onClick={() => getId (event,index)} className="w-28 border-solid border-2 border-sky-500 rounded text-cyan-600 text-sm h-6" name=" quantity" placeholder=" Name" onChange={(e) => setProductPatchName(e.target.value)}></input>
                        <button onClick={(e) => handleEditProducts (e)}><AiOutlineCaretRight/></button>
                    </div>
                :    <div className="flex mt-2 mx-2"><p>Item</p><FaLockOpen className="hover:scale-25 ml-2" onClick={(e) => handleShowEdit (e)}/></div>
            }
      
           {
                showThis 
                ?   <div className="mt-2 mx-2 flex h-6"> <input type="number" onClick={() => getId (event,index)} className="w-28 border-solid border-2 border-sky-500 rounded text-cyan-600 text-sm h-6" name=" quantity" placeholder=" Price" onChange={(e) => setProductPatchPrice(e.target.value)}></input>
                        <button onClick={(e) => handleEditProducts (e)}><AiOutlineCaretRight/></button>
                    </div>
                :    <div className="flex mt-2 mx-2"><p>Preço</p><FaLockOpen className="hover:scale-25 ml-2" onClick={(e) => handleShowEdit (e)}/></div>
            }
     
           {
                showThis 
                ?   <div className="mt-2 mx-2 flex h-6"> <input onClick={() => getId (event,index)} className="w-28 border-solid border-2 border-sky-500 rounded text-cyan-600 text-sm h-6" name=" quantity" placeholder=" Quantity" onChange={(e) => setProductPatchQuantity(e.target.value)}></input>
                        <button onClick={(e) => handleEditProducts (e)}><AiOutlineCaretRight/></button>
                    </div>
                :    <div className="flex mt-2 mx-2"><p>Quantidade</p><FaLockOpen className="hover:scale-25 ml-2" onClick={(e) => handleShowEdit (e)}/></div>
            }
           
           
            </div>

            
            
          )
            })
           }
              {
                showThisOk
                ?<div className='h-max w-max border-solid border-2 border-sky-500 rounded mt-2 bg-green-100 animate-pulse'><div className="flex  bg-green-100"><p className="text-sm flex mr-2 bg-green-100">Editado com sucesso</p><a href="http://localhost:3000/sessions/631d30c461f9b4ee32685abc/a"><FiCheck className="bg-green-200 rounded-full"/></a> </div></div>
                :<div className="animate-pulse mt-2"><AiOutlineLoading3Quarters color="orange" className="h-5 w-5 animate-spin"> </AiOutlineLoading3Quarters> </div>
            }
          
        </div>
        
     
        
        <div className="ml-8 mt-8">
                {Array.from(Array(pages), (item , index) =>{

                 return <button  value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}className="px-4  mr-4 bg-black text-white hover:scale-25 rounded justify-content align-center">{index + 1}</button>
                })}
                </div>
        </>
    )
}

export default ListProduct