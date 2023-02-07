
import { useEffect,useState } from 'react';
import axios from 'axios';

const SalesOrders = ()=>{

  const [getCart,setGetCart] = useState([])
  const [getCode,setGetCode] = useState([])
  const [allInfo,setAllInfo] = useState([])

useEffect(() => {
    axios.get('/allcarts').then(res=>{
       setGetCode(res.data)
       console.log(res.data)
    
      })
      axios.get('/allcodes').then(res=>{
        setGetCart(res.data)
        console.log(res.data)
  
      })
   
}, []);
 console.log(getCode[0])


return(
  <div className='w-full  h-screen bg-gray-800'>  
    <p className='ml-12 mt-4 font-bold text-xl text-white'>Dashboard / Pedidos</p>
    <div className="h-1 w-full bg-slate-400"></div>
 
    <div className='w-11/12 ml-12 h-8 rounded-full bg-slate-100 mt-6 border-b-2 border-indigo-500 flex'>
    
    <p className='ml-4 mr-56 font-mono'>CÓD</p>
    <p className='ml-6 mr-12 font-mono'>EMISSÃO</p>
    <p className='pl-32 w-max font-mono'>TAMANHO</p>
    <p className='ml-4 pl-12 w-max mr-12 font-mono'>COR</p>
    <p className='ml-32'>FOTO</p>
   
    </div>
    
    {getCart?.map((item,index)=>{
      
       return(
        <div className='w-11/12 ml-12 h-fit rounded-lg mt-2  bg-red-200 border-b-2 border-indigo-500 flex'>
   
   <p className='ml-4 h-2 mt-2 w-64 text-sm'>{item.eltransactionCode}</p>
   <p className='h-4 w-fit ml-4 mt-2 mr-6 text-sm'>{item.emissão.substring(0, item.emissão.length - 41)}</p>
   <p className='ml-4 mt-2 text-sm  w-24 mt-2'>{getCode[index]?.sizeOption.map((item)=><p className='text-xs h-2'>{item}</p>)}</p>     
    <div className='mt-2 mb-2'>{getCode[index]?.colorOption.map((item)=><div className=" h-4 w-4  border-solid border-2 border-black rounded-2xl ml-2" style={{  backgroundImage: `url("${item}")` }}></div>)}    </div>
    <p className='ml-52 flex my-2'>{getCode[index]?.productImage[0].map((item)=><img className='h-10 w-10' src={item.Image}></img>)}</p>   
    </div>  
       )
      })} 
     
  </div>
)
//

//<div className=" h-4 w-4 mt-2 border-solid border-2 border-black rounded-2xl ml-2" style={{  backgroundImage: `url("${getCode[index]?.colorOption}")` }}>${getCode[index]?.colorOption}</div>
// <p>carrinho:{getCart[0]?.eltransactionCode}</p>
//<p>product_id:{getCode[0]?.products}</p>
//<p>product_id:{getCode[0]?.product}</p>
//<p>tamanho:{getCode[0]?.sizeOption}</p>
//<p>cor:{getCode[0]?.colorOption}</p>
//<img className='h-32 w-32' src={getCode[0]?.productImage}></img>
}

export default SalesOrders