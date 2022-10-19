
import React, {useEffect,useState} from "react";
import {BsFillCartPlusFill} from "react-icons/bs"
import {IoMdCloseCircle} from "react-icons/io"
import {MdDeleteForever} from "react-icons/md"
import {FiCheck} from "react-icons/fi"
import axios from "axios";

const Collection = () =>{
   




    const [eldata, setData] = useState([])
    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage,setCurrentPage] = useState(0)

    const pages = Math.ceil(eldata.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = eldata.slice(startIndex, endIndex)

    const [Cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState();
    const [showModal, setShowModal] = useState();
    const [showWarning, setShowWarning] = useState();
    const [post , setPost] = useState()
    const [idTransaction, setIdTransaction] = useState();

    

  
    useEffect(() => {
      axios.get('/products').then(res=>{
            setData(res.data)
            console.log(res.data)
           
        })
    }, [setData]);

    const modalCollection = () =>{
    
        setShowCart(true)
        setShowModal(true)
    }

   

  
    const handleCart = (event) => {
     
      
      
      console.log(event +'her event') //event dando como object object
     
    
         
        var elitem = Cart.map((item,index)=> item._id)
        console.log(elitem) //retornando arrayvaz
    
        axios.post('/carts', {products:elitem})
        .then(res => {
        
            console.log(res.data);
            setIdTransaction(res.data._id)
            
          })
       
        
        
        
        setShowWarning(true)
        showWarning = setTimeout(()=>{
            setShowWarning(false)
        },3000)
        

    }

    const handleRemove = (index) =>{
        const item = Cart.slice()
        item.splice(index,1)
        setCart(item)
        setShowModal(false)
        var des = Cart.map((item,index)=> item._id)
        axios.post('/carts', {des})
        .then(res => {
        
            console.log(res.data);
            
          })
  
    }

    const handleredirect = (item,index)=>{
        axios.get(`/transaction${idTransaction}`)
        .then(res => {
        
            console.log(res.data +'here 73');
            setIdTransaction(res.data._id)
            
          })
        axios.get('/transactions').then(res=>{
        
            var token = res.data[0].code
            console.log(token)
            window.location = `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${token}`
          
              
            
        }).catch(err=>{
            console.log(err +'err 15')
        })
    }
    return(
       
        <section className="  h-screen  ml-12 mr-1  flex">
        
            <div  className=" mt-10   inline-block    h-52">

            <blockquote class="   mb-12 text-2xlfont-bold mx-12 italic text-center text-slate-900">
                    When you look
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span class="relative text-white">annoyed</span>
                    </span>
                    all the time, people think that you're busy.
                    </blockquote>
                    {showModal
                    ? <div>


<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    

  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
   
      <div className="h-max w-11/12 bg-red-200 mt-32">
      
      <IoMdCloseCircle className="float-right mb-8 " onClick={() => setShowModal (false)} size={30}></IoMdCloseCircle>       
            <h1>Carrinho</h1>    
           
               {Cart.map((event,index)=>{
                return(
                    <div className="">
                        <div className="w-full h-max  bg-red-100">
                        <MdDeleteForever  className="float-right " onClick={(event,index) => handleRemove (event,index)} size={30}></MdDeleteForever>   
                            <div className="flex m-4">
                            <img className="h-16 w-16 " src={event.productImage} ></img>
                            <p className=" ml-32">{event.productName}</p>
                            <p className="ml-32">{event.productPrice.toFixed(2)}R$</p>
                            </div>
                            
                        
                        </div>
                        
                    </div>
                )
               })}
        <div className="bg-red-400 h-max w-full "><button onClick={(item,index)=> handleredirect (item,index)}>comprar</button></div>
   
      </div>
    </div>
  </div>
</div>

                    </div>
                     :<p></p>   
                    }
                   
                   
                   <div className=" w-max h-max float-right text-green-500 ">
                    {
                        showWarning?<FiCheck className="animate-bounce h-14 w-14"/>:<p></p>
                    }
                    
                    
                   </div>
         
                   <BsFillCartPlusFill size={30} onClick={() => modalCollection()} className='float-right  hover:bg-gray-300 hover:text-black hover:animate-bounce ease-in duration-300 rounded-md h-7'/>
                 
                <div className="mx-12 relative left">

                    {Array.from(Array(pages), (item , index) =>{

                        return <button  value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}className="px-4  mr-4 bg-black text-white hover:scale-125 rounded justify-content align-center">{index + 1}</button>
                    })}
                
                </div>
                {
                   currentItens?.map((event,index)=>{
                    return(
                        
                        <div className="  bg-[#f4f6f5] rounded-xl mt-10 inline-block  ml-12 h-80">
                        <img className="w-48 h-32" src={event?.productImage}></img>
                        <span> {event?.productQuantity}</span>
                        <p>{event.productName}</p>
                        <p>{event.productPrice.toFixed(2)}</p>
                        <p onClick={() => handleCart (event)}>+</p>
                       
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