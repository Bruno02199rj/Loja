import { useState,useEffect } from "react"

import axios from "axios";

import { IoMdCloseCircle } from "react-icons/io";

import {MdDeleteForever} from "react-icons/md"

import Swiper3 from "./Swiper3";
import { SwiperSlide } from "swiper/react";


const Modalx = ({productEdit})=>{
    const [ProductPatchQuantity, setProductPatchQuantity] = useState()
    const [ProductPatchPrice,setProductPatchPrice] = useState()
    const [ProductPatchName,setProductPatchName]   = useState()
    const [ProductPatchImage,setProductPatchImage]   = useState()
    const [ProductPatchImage2,setProductPatchImage2] = useState()
    const [ProductPatchImage3,setProductPatchImage3] = useState()
    const [ProductPatchSize,setProductPatchSize]   = useState()
    const [ProductPatchSize2,setProductPatchSize2] = useState()
    const [ProductPatchSize3,setProductPatchSize3] = useState()
    const [ProductPatchColor,setProductPatchColor] = useState()
    const [ProductPatchColor2,setProductPatchColor2] = useState()
    const [ProductPatchColor3,setProductPatchColor3] = useState()
    const [ProductPatchCategory,setProductPatchCategory] = useState()
    const [ProductPatchDescription,setProductPatchDescription] = useState()
    
    const [showModal,setShowModal] = useState()
    const [showThisOk, setShowThisOk] = useState();
    
   

    useEffect(() => {
      
        console.log('hooov')
    }, [ProductPatchName],[ProductPatchSize],[ProductPatchSize2],[ProductPatchSize3],[ProductPatchImage]);

    
const handleUpdate = () =>{
  

    const data = {
       
        productQuantity : ProductPatchQuantity,
        productPrice :    ProductPatchPrice,
        productName :  ProductPatchName,
        productCategory:ProductPatchCategory,
        productDescription:ProductPatchDescription,
        productSize: [{size:ProductPatchSize},
                     {size:ProductPatchSize2},
                     {size:ProductPatchSize3}],
        productColor:[{color:ProductPatchColor},
                     {color:ProductPatchColor2},
                     {color:ProductPatchColor3}],
        productImage:[{Image:ProductPatchImage},
                      {Image:ProductPatchImage2},
                      {Image:ProductPatchImage3}
                     
                    ]                 
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
return(
    <div>


    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
     
                <div className="h-96 border-b-8 border-indigo-500 flex w-11/32 bg-white mx-2 rounded-xl">
               
                   <div className="h-full w-72 mx-4 my-2 ">
                       
                       <Swiper3 eldata={productEdit.productImage}/><SwiperSlide/>
                      
                   </div>
               
                   <div className="block  focus:outline-none w-full h-full">
                       
                   
                  
                   <div className="ml-2 h-20 w-32 ">
                  
                   <h1 className="float-left  mt-2 mt-2">SKU:{productEdit._id}</h1>
                   <h1 className="float-left   mt-2 mt-2">Item:{ProductPatchName || productEdit.productName }</h1>
                   <h1 className="float-left    mt-2">{productEdit.productSize?.map((item)=><p className="float-left w-12 mr-2">{ProductPatchSize3||ProductPatchSize2||ProductPatchSize||item.size}</p>)}</h1>
                  
                   </div>
                 
                   <div className="ml-2 flex h-12 w-32 ">
                   {productEdit.productColor?.map((item)=><div className="hover:h-2 mr-2 cursor-pointer h-8 w-8 mt-2 border-solid border-2 border-black rounded-2xl " style={{  backgroundImage: `url("${item.color}")` }}></div>)}
                 
                   </div>
                   <div className="ml-2 flex w-max flex ">
                   <p className=" mt-2">Categoria: {ProductPatchCategory||productEdit.productCategory}</p>
                 
                   </div>
                   <div className="ml-2 flex  w-76 flex ">
                   <p className=" mt-2">Descrição: {ProductPatchDescription||productEdit.productDescription}</p>
                 
                   </div>
                   <div className="ml-2 flex h-12 w-max flex ">
                   <p className=" mt-2">Em estoque: <input className="w-12" onChange={(e)=>setProductPatchQuantity(e.target.value)} type='number' value={ProductPatchQuantity||productEdit.productQuantity}></input></p>
            
                 
                   </div>
              
                
                      
                   </div>
                   <button  onClick={()=>handleUpdate()} name="submit" className="mt-72  h-12 w-15 px-4  bg-black text-white">ATUALIZAR</button>
    
                   
                   <div className="h-4 w-full  ">
                       
                  
                   
                        <div className="h-76 w-full mt-2  flex ">
                           <form className="mx-12" >

                               <div><span className="float-left">Nome</span></div>
                               <div className="w-max flex flex "><input onChange={(e)=>setProductPatchName(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none" type='text' ></input><MdDeleteForever size={25} onClick={()=> setProductPatchName([])}/></div>
                               <div><span className="float-left">Tamanho1</span></div>
                         
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchSize(e.target.value)} className="block w-32 h-4  border-b-2 border-indigo-500 focus:outline-none" type='text' ></input ><MdDeleteForever size={25} onClick={()=> setProductPatchSize([])}/></div>
                              <div><span className="float-left">Tamanho2</span></div>
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchSize2(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchSize2(false)}/></div>
                              <div><span className="float-left">Tamanho3</span></div>
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchSize3(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchSize3([])}/></div> 
                              <div><span className="float-left ">Imagem1</span></div>
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchImage(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchColor([])}/></div> 
                              <div><span className="float-left">Imagem2</span></div>
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchImage2(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchColor2([])}/></div> 
                              <div><span className="float-left">Imagem3</span></div>
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchImage3(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchColor3([])}/></div> 
                             
                              
                           </form>
                          
                           <form className="mt-0.5">
                           <div><span className="float-left">Categoria</span></div>
                               
                               <div className="w-max flex "> <input onChange={(e)=>setProductPatchCategory(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text' ></input ><MdDeleteForever size={25} onClick={()=> setProductPatchCategory([])}/></div>
                               
                           <div><span className="float-left">Descrição</span></div>
                               
                               <div className="w-max flex "> <input onChange={(e)=>setProductPatchDescription(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text' ></input ><MdDeleteForever size={25} onClick={()=> setProductPatchDescription([])}/></div>
                           <div><span className="float-left">Cor1</span></div>
                               
                               <div className="w-max flex "> <input onChange={(e)=>setProductPatchColor(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text' ></input ><MdDeleteForever size={25} onClick={()=> setProductPatchColor([])}/></div>
                               <div><span className="float-left">Cor2</span></div>
                               <div className="w-max flex "> <input onChange={(e)=>setProductPatchColor2(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchColor2([])}/></div>
                               <div><span className="float-left">Cor3</span></div>
                               <div className="w-max flex"> <input onChange={(e)=>setProductPatchColor3(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text' ></input ><MdDeleteForever size={25} onClick={()=> setProductPatchColor3([])}/></div>
                               <div><span className="float-left">Imagem4</span></div>
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchSize3(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchSize3([])}/></div> 
                              <div><span className="float-left">Imagem5</span></div>
                              <div className="w-max flex "> <input onChange={(e)=>setProductPatchSize3(e.target.value)} className="block w-32 h-4 border-b-2 border-indigo-500 focus:outline-none  " type='text'></input ><MdDeleteForever size={25} onClick={()=> setProductPatchSize3([])}/></div> 
                           </form>
                              
                         </div>
                       
                       
                       </div>
                       
                       <div>
                       <IoMdCloseCircle onClick={()=>window.location = '/sessions/631d30c461f9b4ee32685abc/overview'} className="float-right " size={30}></IoMdCloseCircle>
                           </div>
                         


                </div>
                
            </div>
        </div>
    </div>

</div>
)




}

export default Modalx