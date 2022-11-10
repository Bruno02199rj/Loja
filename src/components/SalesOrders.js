
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



return(
  <div>
    <p>carrinho:{getCart[0]?.eltransactionCode}</p>
    <p>product_id:{getCode[0]?.products}</p>
    <p>tamanho:{getCode[0]?.sizeOption}</p>
    <p>cor:{getCode[0]?.colorOption}</p>
  </div>
)

}

export default SalesOrders