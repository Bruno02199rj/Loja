
    import React, { useEffect, useState } from "react";
    import { BsFillCartPlusFill,BsCartFill } from "react-icons/bs"
  
    import { FiCheck } from "react-icons/fi"

    import axios from "axios";
    import PaginationComponent from "./PaginationComponent";
import Swiper from "./Swiper";
import { SwiperSlide } from "swiper/react";
import Swiper2 from "./SwiperCollection";
import Footer from "./Footer";
import Brands from "./Brands";
import SwiperMostAcessed from "./SwiperMostAcessed";
import Main from "./Main";
import SwiperCart from "./SwiperCart";

    
    

    const Collection = () => {



        const [sizeOpt,setSizeOpt] = useState([])
        const [elsize,setElSize] = useState([])
        const [getColorValue, setGetColorValue] = useState([])
        const [elColor,setElColor] = useState([])
      
        const [Cart, setCart] = useState([]);
        const [showCart, setShowCart] = useState();
        const [showModal, setShowModal] = useState();
        const [showWarning, setShowWarning] = useState();
        const [post, setPost] = useState()
        const [idTransaction, setIdTransaction] = useState();
        const [getDetails, setGetDetails] = useState()
        const [getInformation, setGetInformation] = useState([])
      
      
  
        const [transactionCode,setTransactionCode] = useState()

        const [eldata, setElData] = useState([])
        const [filterItens,setFilterItens] = useState([])
        const [booleanFilter,setBolleanFilter] = useState(false)
        const [itensPerPage, setItensPerPage] = useState(4)
        const [currentPage, setCurrentPage] = useState(0)
        const pages = Math.ceil(eldata.length / itensPerPage)
        const startIndex = currentPage * itensPerPage
        const endIndex = startIndex + itensPerPage
        const currentItens = eldata.slice(startIndex, endIndex)
       
        const [sum,setSum] = useState()
    







        useEffect(() => {
            axios.get('/products').then(res => {

                setElData(res.data)
       
          
                
               

            })
        }, []);


     








        const modalCollection = () => {

            setShowCart(true)
            setShowModal(true)
        }




        const handleCart = (event) => {



            console.log(event) //event dando como object object


            Cart.push(event)
            sizeOpt.push(elsize)
            getColorValue.push(elColor)
            
            

            
            
            //setShowWarning(true)
        


        }
        const handleRemove = (index) => {
            const item = Cart.slice()
            item.splice(index, 1)
            setCart(item)
            setShowModal(false)
            var des = Cart.map((item, index) => item._id)
            axios.post('/carts', { des })
                .then(res => {

                    console.log(res.data);

                })
        }

        const  handleredirect = (item, index) => {

            var elitem = Cart.map((item, index) => item._id)
            var elitemImage = Cart.map((item, index) => item.productImage)
            var elitememit = Cart.map((item, index) => item)
             console.log(elitemImage)
             //retornando arrayvaz
            console.log(elitem)
             axios.post('/carts', { products: elitem , sizeOption: sizeOpt, colorOption: getColorValue, productImage:elitemImage,})
           
        
                .then(res => {
                    //id transaction passa

                    console.log(res) //irfomaçoes sobre o pedido 
                    axios.get(`/transaction/${res.data._id}`)
                         .then(res => {
                            
                            var transactionCode  =   res.data.substring(67)
                             setTransactionCode(transactionCode)
                             axios.post('/transcode',{eltransactionCode: transactionCode}).then(res=>{
                                console.log(res)
                             })
                               
                               //mandar codigo da transação para o banco 
                            
                               window.location.href = `${res.data}`
                        })
                })
        }

        const moreDetails = (event) => {
            console.log(event)
            setGetInformation(event)
            setGetDetails(true)
        }

        const handleoptsize = (item) =>{
            
           
            setElSize(item)
            console.log(item)
        }
        
        const teste0 = (item) =>{
            setElColor(item)
            console.log(getColorValue)
            
        }
       
        let ress = eldata.map((event)=>{
        return event.productCategory
        })
        let unico = ress.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        });

        const handleFilter = (event) => {
         
          let fil = eldata.filter((e)=>e.productCategory == event)
          setFilterItens(fil)
          setBolleanFilter(true)
        }
        const soma =  Cart.reduce(
            (accumulator,person)=> accumulator + person["productPrice"],0
            )
           {
           
            }
            
           
        
        


        return (
           
            <section className="        w-full h-full  ">
                
                 <div className=" h-max border-b-2 border-black bg-white py-2 text-black mt-14 w-full fixed z-40 flex flex-wrap justify-center">
                    {unico.map((event)=>{
                       
                   
                        return(
                            
                            <p onClick={()=>handleFilter(event)} className="mx-1 text-xs hover:border-b-2 hover:border-black">{event}</p>
                        )
                     
                    })}
                   
                     

         

               
     
                    
                 

                    </div>
                
                                <BsFillCartPlusFill size={30} onClick={() => modalCollection()} className='  hover:bg-gray-300 hover:text-black hover:animate-bounce ease-in duration-300 rounded-md h-7 block' />  
                    <blockquote class="   mb-12 text-2xlfont-bold text-center italic text-center text-slate-900">
                       
                    </blockquote>
                    
                    <Main/>
                              
             
              
                    <div className="h-12 w-full fixed z-50">
                        <div onClick={()=>setShowModal(true)} className="h-12 w-12 cursor-pointer bg-gray-200 float-right p-2 rounded-full "><BsCartFill size={30}/></div>
                    </div>

                    {showModal
                        ? <div>


                            <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                                <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

                                <div class="fixed inset-0 z-10 overflow-y-auto">
                                    <div class="flex min-h-full items-end justify-center p-4 text-center items-center p-0">

                                        <div className="h-max w-full mt-18  lg:flex bg-white ">
                                            
                                       <div className="h-max w-full      ">
                                       {Cart.map((event, index) => {
                                               console.log(event)
                                                return (
                                                    <div className="flex border-b-2 border-black">  
                                                        
                                                        <div className="w-max  h-max   ">
                                                       
                                                           
                                                              
                                                                <SwiperCart eldata={event.productImage}/>
                                                               
                                                               
                                                            </div>
                                                           <div className=" h-max w-max text-left">
                                                            <span className="h-4 w-max font-bold ">{event.productName}</span>
                                                            
                                                            <div><span className="h-4 text-xs w-max">cod#<span className="text-slate-500">{event._id}</span></span></div>
                                                           <span className="text-xs">vendido e entregue por Lotus Fashion</span>
                                                          
                                                           <div className=" h-8 w-8 mt-2 border-solid border-2 border-black rounded-2xl " style={{  backgroundImage: `url("${getColorValue[index]}")` }}></div>
                                                               <p className="text-sm">tamanho: <span className="text-slate-500 text-sm">{sizeOpt[index]}</span></p>
                                                               <p className="font-bold">R${event.productPrice.toFixed(2)}</p>
                                                               
                                                             
                                                           </div>
                                                            
                                                          
                                                              
                                                        </div>

                                                   
                                                )
                                            
                                                
                                            })}
                                            
                                       </div>
                                       
                                       <div className="h-screnn flex place-items-center w-full border-b-2 border-black ">
                                         <div className="w-full">  
                                         <h1 className="font-bold">Resumo do pedido</h1>
                                            <p className="text-slate-500 ">subtotal({Cart.length})</p>
                                            
                                            <p className="font-bold text-xl">R${soma.toFixed(2)}</p>
                                            <span className="text-xs text-slate-500">em até 6x sem juros</span>
                                            <div className="bg-black text-white font-bold h-max w-full "><button onClick={(item, index) => handleredirect(item, index)}>comprar</button></div>
                                            </div>
                                           
                                            
                                            

                                       </div>
                                       


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        : <p></p>
                    }


                    <div className=" w-max h-max float-right  ">
                        {
                            showWarning ? <FiCheck className="animate-bounce h-14 w-14" /> : <p></p>
                        }


                    </div>

                   
                  

                    {
                        getDetails ? <div>


                            <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">


                                <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
  
                                <div class="fixed inset-0 z-10 overflow-y-auto">
                                    <div class="flex min-h-full  items-end justify-center  text-center sm:items-center sm:p-0">

                                        <div className="h-max w-full  md:flex lg:flex  lg:justify-center ">

                                           
                                               <div className="h-full   w-full lg:w-72 bg-gray-200  " >
                                               
                                                <Swiper   eldata={getInformation} /><SwiperSlide />
                                               
                                                </div>
                                                
            
                                         


                                            <div className="bg-white float-right h-82 w-full lg:w-[35rem]  pl-4 pr-4">
                                            <p className="font-bold uppercase">{getInformation.productName}</p> 
                                                <p className="float-right h-6 w-6 rounded-2xl bg-black text-white font-bold mt-2" onClick={() => setGetDetails(false)} >X</p>
                                                <p className=" mt-2 w-70 text-2xl"></p>
                                             
                                              
                                               <p className="text-stone-400  float-left text-sm mt-6">cod:{getInformation._id}</p>
                                                  
                                                
                                                <div className="h-12 w-full   flex">
                                                <span className="float-left text-2xl text-black font-bold mt-2">R${getInformation.productPrice.toFixed(2)}</span>
                                              
                                                
                                              </div>
                                                
                                                <p className="h-max w-96   text-center text-xs break-all">{getInformation.productDescription}dsoadsadisaid9sa9id9asi9dasi9id9asi9dasi9idas9id9asuj98udjs8aud8sua89dusa89ud8sua98duas89usda</p>
                                                <div className="mt-12 w-full h-4 ">
                                                
                                                    <span className="float-left text-xs">Tamanho</span>
                                                                                                                  

                                                </div>
                                               
                                                <div className=" w-full  mt-4">
                                                {getInformation.productSize.map((item, index) => {
                                                                var sizeValue =  getInformation.productSize[index].size  
                                                               
                                                                console.log(getInformation.productSize[index].size)
                                                                

                                                                return (
                                                                   
                                                                    <p  className=" h-12 w-12 pt-3 text-xs hover:border-black  float-left border-solid border border-gray-200 mr-2 " onClick={() => handleoptsize(sizeValue)} value={sizeValue}>{sizeValue}</p>
                                                                    
                                                                )
                                                                
                                                            })}
                                                  
                                                </div>
                                                <div className=" w-full float-left flex ">
                                                    <div className="">
                                                        <form className="flex">
                                                    

                                                        
                                                    {
                                                        getInformation.productColor?.map((item,index)=>{
                                                        
                                                        var colorValue = getInformation.productColor[index].color
                                                       

                                                        return(
                                                            <option  onClick={()=>teste0(colorValue)} value={colorValue} className="hover:border-black hover:border-2    cursor-pointer h-8 w-8 mt-2 border-solid border border-gray-200 rounded-2xl" style={{  backgroundImage: `url("${colorValue}")` }}></option>
                                                        )
                                                        })
                                                    }
                                                    </form>
                                                    </div>
                                                
                                                
                                                    
                                                </div>
                                                
                                                <div className="  w-full mt-32  mb-4"><span className="py-4 px-4  w-32 bg-black text-white font-bold cursor-pointer" onClick={() => handleCart(getInformation)}>Adicionar ao carrinho</span></div>
                                            </div>
                                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <p></p>

                    }

                   
                    <div className="h-full w-full  flex flex-wrap justify-center ">
                  {booleanFilter?<div className="h-max w-max flex flex-wrap justify-center">
                    {
                    filterItens?.map((event, index) => {
                   
                         
                   return (
                           
                       <div className=" w-48 h-max lg:w-60 lg:h-full    mt-2  mx-1.5      ">
                               
  
                       <Swiper2 eldata={event.productImage}/><SwiperSlide/>
                       <div className="h-36 w-42   w-full  bg-white rounded-b-xl">
                          
                        
                         
                       <p className="text-stone-500 font bold  text-center ">{event.productDescription} </p>
                 
                       <div className="h-8   w-full flex ">
                       {event.productColor.map((item)=><div className="hover:h-4  cursor-pointer h-4 w-4 mx-1 border-solid border-1 border-black rounded-2xl " style={{  backgroundImage: `url("${item.color}")` }}></div>)}
                       </div>
                       {console.log(event.productColor.map((item)=>item.color))}
                       
                       
                      <div className="w-full h-max">
                      <div onClick={() => moreDetails(event)} className="flex h-max cursor-pointer rounded mt-4 w-max px-4 float-right bg-black  ">  
                       
                       
                       <p className="text-white font-bold text-center text-sm">Ver</p>
                       </div>
                       <div>
                           <span className="text-black ml-2">Preço</span>
                      
                       </div>
                       <span className="text-black ml-2 font-bold">R${event.productPrice}</span>
                      </div>
                      
               
              
                       
                
                       
                      
                           


                       </div>



                          
                          
                         
                          
                       </div>
                      

                   )
               })





               }   </div>
            
                    :<div className="h-max w-max  flex flex-wrap justify-center">
                    {
                    eldata?.map((event, index) => {
                   
                         
                   return (
                           
                       <div className=" w-48 bg-gray-200 lg:w-60 h-max   mt-2  mx-1.5      ">
                               
  
                       <Swiper2 eldata={event.productImage}/><SwiperSlide/>
                       <div className="h-36 w-42   w-full  bg-white">
                          
                        
                         
                       <p className="text-stone-500 text-sm font bold  text-center ">{event.productDescription} </p>
                 
                       <div className="h-8   w-full flex ">
                       {event.productColor.map((item)=><div className="hover:h-4  cursor-pointer h-4 w-4 mx-1 border-solid border-1 border-black rounded-2xl " style={{  backgroundImage: `url("${item.color}")` }}></div>)}
                       </div>
                       {console.log(event.productColor.map((item)=>item.color))}
                       
                       
                      <div className="w-full h-max">
                      <div onClick={() => moreDetails(event)} className="flex h-max cursor-pointer rounded mt-4 w-max float-right  text-center  px-4 bg-black">  
                       
                       
                       <p className="text-white text-sm font-bold  text-sm">Ver</p>
                       </div>
                       <div>
                           <span className="text-black ml-2 text-sm">Preço</span>
                      
                       </div>
                       <span className="text-black ml-2 text-sm font-bold">R${event.productPrice}</span>
                      </div>
                      
               
              
                       
                
                       
                      
                           


                       </div>



                          
                          
                         
                          
                       </div>
                      

                   )
               })





               }   </div>}
                  
                  
                

               
                

                 </div>
                 
         

              
            </section >
     
        )
    }

    export default Collection