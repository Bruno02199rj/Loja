import axios from "axios";
import Modalx from "./Modal";
import { useEffect, useState } from "react";
import {AiOutlineLoading3Quarters, AiOutlineCaretRight} from "react-icons/ai"
import {TiTag} from "react-icons/ti"
import { IoMdCloseCircle } from "react-icons/io";
import {FaLockOpen} from "react-icons/fa"
import {FiCheck} from "react-icons/fi"
import {MdOutlinePriceCheck,MdInvertColors, MdProductionQuantityLimits,MdDeleteForever} from "react-icons/md"
import { Outlet } from "react-router-dom";
import Swiper3 from "./Swiper3";
import { SwiperSlide } from "swiper/react";


const ListProduct = () => {

    const [ProductData,setProductData] = useState([])
    const [ProductPatchQuantity, setProductPatchQuantity] = useState()
    const [ProductPatchPrice,setProductPatchPrice] = useState()
    const [ProductPatchName,setProductPatchName]   = useState()
    const [ProductPatchSize,setProductPatchSize]   = useState()
    const [ProductPatchSize2,setProductPatchSize2] = useState()
    const [ProductPatchSize3,setProductPatchSize3] = useState()
    const [ProductPatchColor,setProductPatchColor] = useState()
    const [ProductPatchColor2,setProductPatchColor2] = useState()
    const [ProductPatchColor3,setProductPatchColor3] = useState()
    const [ProductId, setProductId] = useState('')
    const [showThis, setShowThis] = useState()
    const [showThisOk, setShowThisOk] = useState();
    const [showModal,setShowModal] = useState()
    const [itensPerPage, setItensPerPage] = useState(5)
    const [currentPage,setCurrentPage] = useState(0)
    const [productEdit,setProductEdit] = useState()
    

    const pages = Math.ceil(ProductData.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = ProductData.slice(startIndex, endIndex)

 



    useEffect(() => {
        axios.get('/products').then(res=>{
        
            setProductData(res.data)
           
          })
        }, [setProductData],);
       
useEffect(() => {
    console.log('efect')
}, []);

        
const handleEditProducts = () =>{
   
    
   
    

    const url = '/products/63259abfdf50b46a6518432/'+ProductId //pegar url do produto dinamicamente

    axios.patch(url,{
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

const handleEdit = (event)=>{
    setShowModal(true)
    setProductEdit(event)
    console.log(event)

}

const handleUpdate = () =>{
  

    const data = {
       
        productQuantity : ProductPatchQuantity,
        productPrice : ProductPatchPrice,
        productName : ProductPatchName,
       
        productSize: [{size:ProductPatchSize},
                     {size:ProductPatchSize2},
                     {size:ProductPatchSize3}],
        productColor:[{color:ProductPatchColor},
                     {color:ProductPatchColor2},
                     {color:ProductPatchColor3}]    
    }

    const url = '/products/63259abfdf50b46a6518432/'+productEdit._id 

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

const handleDelete = (event)=>{

    console.log(event)
    const url = '/products/631d30c461f9b4ee32685abc/'+event._id 

    axios.delete(url,event,{ //passar data como parametro 
       
    })
    .then((res)=>{
       
      console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
            
}

    return (
        <>
        
        
        <div className="w-full h-max   mt-20 ">
        <div className="h-max w-max flex"><p className="pl-16 w-52">SKU</p><p className="pl-24">ITEM</p><p className="pl-14">VALOR</p><p className="pl-4">QUANTIDADE</p></div>
        
        
        <div className="h-1 w-full bg-blue-500"></div>
           {
            
        currentItens?.map((event,index)=>{
        
          return (
            <div  className="h-full py-2 hover:bg-cyan-400 rounded w-full  flex ">
                <img  className=" ml-4 w-12  h-12" src={event.productImage[0].image}></img>
            
            <div className="   flex ">
            <span className="w-52">{event._id}</span>    
            <h1 className="w-32 pl-8">{event?.productName}
          
            </h1>
             
            <h1 className="w-16"> R$ {event?.productPrice}</h1>
            
            
            <h1 className="w-16 pl-8"> {event?.productQuantity}</h1>  
           
            <button className=" h-8 w-24  ml-12 bg-green-600 rounded-md text-white text-sm font-bold" onClick={()=>handleEdit(event)}>Editar</button>
            <button className=" h-8 w-24  ml-12 bg-red-600 rounded-md text-white text-sm font-bold" onClick={()=>handleDelete(event)}>Deletar</button>
         

            </div>
           
          
           
           
           
            </div>

            
            
          )
            })
           }
           
          
        </div>
        
     
        
        <div className=" ml-4 mt-4 ">
                {Array.from(Array(pages), (item , index) =>{

                 return <button  value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}className="px-2  mr-2 bg-black text-white hover:scale-25 rounded justify-content align-center">{index + 1}</button>
                })}
                </div>
                {showModal?
                <Modalx productEdit={productEdit}/>
             :<p></p>
                }
               
                    
        </>
    )
}

export default ListProduct