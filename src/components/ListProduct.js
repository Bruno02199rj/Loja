import axios from "axios";
import { useEffect, useState } from "react";

const ListProduct = () => {

    const [ProductData, setProductData] = useState([])
    const [ProductPatchData, setProductPatchData] = useState({})

    useEffect(() => {
        axios.get('/products').then(res=>{
        
            setProductData(res.data)
          
          })
        }, [setProductData]);


const handleEditProducts = () =>{
    
    const data = {
        
        productQuantity : ProductPatchData
    }
    const url = '/products/631259abfdf50b46a6518432/63166fa530efed3101af0cb9'

    axios.patch(url,data,{
        headers: {
            'authentication': '631259abfdf50b46a6518432'
          }
    })
    .then((res)=>{
        
       
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
            
    

  

   
}

const handleInputData = (e) =>{
    if(e.keyCode == 13){

       setProductPatchData(e.target.value)
    }
}


    return (
        <>

        <div className="w-full h-full flex ">
           {
        ProductData?.map((event)=>{
          return (
            <div className="h-full w-4/12 mx-2  bg-red-900">
            <img className="w-full h-32" src={event?.productImage}></img>
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
            </div>
          )
            })
           }
           <input onKeyDown={(e) => handleInputData (e)}></input>
           <button onClick={(e) => handleEditProducts (e)}>HandleProducts</button>
        </div>
        </>
    )
}

export default ListProduct