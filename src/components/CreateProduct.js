import { Outlet } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";



const CreateProduct = () => {

  

  useEffect(() => {
    axios.get('/products').then(res=>{
        console.log(res)
      })
    }, []);


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

   

  const createProduct = () =>{

  
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
      productImage:[{image:ProductPatchImage},
                    {image:ProductPatchImage2},
                    {image:ProductPatchImage3}
                   
                  ]                 
  }

    const url = '/products/631d30c461f9b4ee32685abc'

    axios.post(url,data,{
      
    })
    .then((res)=>{
       
      console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
            


  }



    return (
        
          <div className=" h-full w-screen bg-gray-300 ">
          <h3  className="ml-12 mt-4 font-bold text-xl text-black"></h3>

        

            <section className="w-full  h-max mt-2 bg-stone-200">

        
         

            </section>
          
            <section className="h-4/5 w-11/12 mx-12 rounded-md   bg-white inline-block flex">
              <div>   <h3 className="m-4 text-lg font-bold">Produto - Produto1</h3>

<span className="m-4 font-bold">Titulo</span>
<div><input onChange={(e)=>setProductPatchName(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
 <h3 className="m-4 font-bold">Descrição</h3>
 <div><textarea onChange={(e)=>setProductPatchDescription((e.target.value))} className="m-0 h-32 w-72 ml-4 mt-2 border-2 rounded-md border-neutral-400 "></textarea></div>
<h3 className="ml-4 mt-2 font-bold">Categoria</h3>
<div><input  onChange={(e)=>setProductPatchCategory(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Preço</h3>
<div><input onChange={(e)=>setProductPatchPrice(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Quantidade</h3>
<div><input  onChange={(e)=>setProductPatchQuantity(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div></div>
           
<section className="h-max w-52 float-right ml-12 m-3">
<h3 className="ml-4 mt-2 font-bold">Cor 1</h3>
<div><input onChange={(e)=>setProductPatchColor(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Cor 2</h3>
<div><input onChange={(e)=>setProductPatchColor2(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Cor 3</h3>
<div><input onChange={(e)=>setProductPatchColor3(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Tamanho 1</h3>
<div><input onChange={(e)=>setProductPatchSize(e.target.value)}   className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Tamanho 2</h3>
<div><input  onChange={(e)=>setProductPatchSize2(e.target.value)}className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Tamanho 3</h3>
<div><input onChange={(e)=>setProductPatchSize3(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
  
  
  
  
  </section> 
  <section className="h-max w-52 float-right ml-12 m-3">
<h3 className="ml-4 mt-2 font-bold">Image 1</h3>
<div><input onChange={(e)=>setProductPatchImage(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Imagem 2 </h3>
<div><input onChange={(e)=>setProductPatchImage2(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
<h3 className="ml-4 mt-2 font-bold">Imagem 3</h3>
<div><input onChange={(e)=>setProductPatchImage3(e.target.value)} className="h-6 w-16 ml-4 mt-2 border-2 rounded-md border-neutral-400 w-max  " placeholder="teste"></input></div>
  
  
  
  </section> 

  <div><button onClick={()=>createProduct()} className="h-12 w-32 mt-6 ml-12 bg-green-600 rounded-md text-white font-bold">Salvar</button></div>
             </section>
           
    
             
          
          </div>
            
        
      
    )
}

export default CreateProduct