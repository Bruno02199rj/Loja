import axios from "axios";
import { useEffect, useState } from "react";
import {AiFillEdit} from "react-icons/ai"

const ListProduct = () => {

    const [ProductData, setProductData] = useState([])
    const [ProductPatchQuantity, setProductPatchQuantity] = useState({})
    const [ProductPatchPrice, setProductPatchPrice] = useState({})
    const [ProductPatchDescription, setProductPatchDescription] = useState('')
    const [ProductId, setProductId] = useState('')

    useEffect(() => {
        axios.get('/products').then(res=>{
        
            setProductData(res.data)
          
          })
        }, [setProductData]);



const handleEditProducts = () =>{
   
    const data = {
        productDescription : ProductPatchDescription,
        productPrice : ProductPatchPrice,
        productQuantity : ProductPatchQuantity
      
    }
   
    

    const url = '/products/631259abfdf50b46a6518432/'+ProductId //pegar url do produto dinamicamente

    axios.patch(url,data,{
        headers: {
            'authentication': '631259abfdf50b46a6518432'
          }
    })
    .then((res)=>{
        
      console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
            
   
}



const handleInputData = (e) =>{
   
    if(e.keyCode == 13){
    
       setProductPatchQuantity(e.target.value)
       setProductPatchPrice(e.target.value)
       setProductPatchDescription(e.target.value)
       console.log(ProductPatchDescription)
    }else{
        console.log('typeof failid')
    }
}


const getId = (event,index) =>{

    setProductId(event._id, [index])
        
    console.log(ProductId)
}


    return (
        <>

        <div className="w-full h-full flex ">
           {
        ProductData?.map((event,index)=>{
           
          return (
            <div className="h-full w-4/12 mx-2  ">
        
            <img  className="w-full h-32" src={event?.productImage}></img>
            <div className="mx-16">
            <h1>Item:{event?.productName}</h1>
            </div>
            <div className="px-16">
            <h1>Preço{event?.productPrice}</h1>
            
            </div>
            <div className="mx-16">
            <h1>Cor:{event?.productDescription}</h1>
            </div>
            <h1>quantidade: {event?.productQuantity}</h1>
          
           

           <br></br>
           <div className="flex">
                <AiFillEdit/> <input onClick={() => getId (event,index)} className="w-max" name="here quantity" placeholder="here quantity" onKeyDown={(e) => handleInputData (e)}></input>
            </div>
           <button onClick={(e) => handleEditProducts (e)}>HandleProducts</button>
           <br></br>
           <div className="flex">
                <AiFillEdit/> <input onClick={() => getId (event,index)} className="w-max" name="here price" placeholder="here Price" onKeyDown={(e) => handleInputData (e)}></input>
            </div>
           <button onClick={(e) => handleEditProducts (e)}>HandleProducts</button>
           <div className="flex">
                <AiFillEdit/> <input onClick={() => getId (event,index)} className="w-max" name="here description" placeholder="here Description" onKeyDown={(e) => handleInputData (e)}></input>
            </div>
           <button onClick={(e) => handleEditProducts (e)}>HandleProducts</button>
            </div>
            
          )
            })
           }
          
        </div>
        </>
    )
}

export default ListProduct