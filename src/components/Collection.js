
    import React, { useEffect, useState } from "react";
    import { BsFillCartPlusFill,BsCart3 } from "react-icons/bs"
    import { IoMdCloseCircle } from "react-icons/io"
    import { MdDeleteForever } from "react-icons/md"
    import { FiCheck } from "react-icons/fi"

    import axios from "axios";
    import PaginationComponent from "./PaginationComponent";
import Swiper from "./Swiper";
import { SwiperSlide } from "swiper/react";
import Swiper2 from "./SwiperCollection";
import Footer from "./Footer";
import SwiperMostAcessed from "./SwiperMostAcessed";
    
    

    const Collection = () => {



        const [sizeOpt,setSizeOpt] = useState([])
        const [resId, setResId] = useState()
        
      
        const [Cart, setCart] = useState([]);
        const [showCart, setShowCart] = useState();
        const [showModal, setShowModal] = useState();
        const [showWarning, setShowWarning] = useState();
        const [post, setPost] = useState()
        const [idTransaction, setIdTransaction] = useState();
        const [getDetails, setGetDetails] = useState()
        const [getInformation, setGetInformation] = useState([])
        const [getSizeValue, setGetSizeValue] = useState()
        const [getColorValue, setGetColorValue] = useState([])
        const [allOptionSize, setAllOptionSize] = useState([])
        const [transactionCode,setTransactionCode] = useState()

        const [eldata, setElData] = useState([])
        const [itensPerPage, setItensPerPage] = useState(4)
        const [currentPage, setCurrentPage] = useState(0)
        const pages = Math.ceil(eldata.length / itensPerPage)
        const startIndex = currentPage * itensPerPage
        const endIndex = startIndex + itensPerPage
        const currentItens = eldata.slice(startIndex, endIndex)
      

    







        useEffect(() => {
            axios.get('/products').then(res => {

                setElData(res.data)
       
          
                
               

            })
        }, []);


     




console.log(eldata)




        const modalCollection = () => {

            setShowCart(true)
            setShowModal(true)
        }




        const handleCart = (event) => {



            console.log(event) //event dando como object object


            Cart.push(event)
            console.log(Cart)

            

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
            
            sizeOpt.push(item)
            
            console.log(sizeOpt)
        }

        const teste0 = (item) =>{
            getColorValue.push(item)
            console.log(getColorValue)
            
        }

      
        return (
           
            <section className="      mt-10  w-full h-full   ">
                                <BsFillCartPlusFill size={30} onClick={() => modalCollection()} className='  hover:bg-gray-300 hover:text-black hover:animate-bounce ease-in duration-300 rounded-md h-7 block' />  
                    <blockquote class="   mb-12 text-2xlfont-bold text-center italic text-center text-slate-900">
                       
                    </blockquote>
                    <span className="font-bold">OFERTAS DO DIA</span> 
                    
                              
           
              
           
                    {showModal
                        ? <div>


                            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                                <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

                                <div class="fixed inset-0 z-10 overflow-y-auto">
                                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                        <div className="h-max w-11/12 bg-red-200 mt-32">

                                            <IoMdCloseCircle className="float-right mb-8 " onClick={() => setShowModal(false)} size={30}></IoMdCloseCircle>
                                            <h1>Carrinho</h1>

                                            {Cart.map((event, index) => {
                                               console.log(event.productImage)
                                                return (
                                                    <div className="">
                                                        <div className="w-full h-max  ">
                                                       
                                                            <MdDeleteForever className="float-right " onClick={(event, index) => handleRemove(event, index)} size={30}></MdDeleteForever>
                                                          
                                                            <div className="flex m-4">
                                                              
                                                                {event.productImage.map((item)=> <img className="h-16 w-16 mr-2 " src={item.image} ></img>)}
                                                               
                                                                <p className=" ml-32">{event.productName}</p>
                                                                <p className="ml-32">{event.productPrice.toFixed(2)}R$</p>
                                                                <p>tamanho: {sizeOpt[index]}</p>
                                                               <div className=" h-8 w-8 mt-2 border-solid border-2 border-black rounded-2xl ml-2" style={{  backgroundImage: `url("${getColorValue[index]}")` }}></div>
                                                              
                                                            {console.log('swssssss')}
                                                            </div>


                                                        </div>

                                                    </div>
                                                )
                                            })}
                                            <div className="bg-red-400 h-max w-full "><button onClick={(item, index) => handleredirect(item, index)}>comprar</button></div>


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


                            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">


                                <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
  
                                <div class="fixed inset-0 z-10 overflow-y-auto">
                                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                        <div className="h-max w-11/8   flex">

                                            <div className="h-82 w-42  ml-16 ">
                                            
                                               <div className="h-full w-full bg-yellow-600" >
                                               
                                                <Swiper   eldata={getInformation} /><SwiperSlide />
                                               
                                                </div>
                                                
            
                                            </div>


                                            <div className="bg-white float-right h-82 w-full mr-16 pl-4 pr-4">
                                                
                                                <p className="float-right h-6 w-6 rounded-2xl bg-black text-white font-bold mt-2" onClick={() => setGetDetails(false)} >X</p>
                                                <p className=" mt-2 text-2xl">VESTIDO CURTO EM PONTO ROMA COM VIÉS CONTRASTANTE E ETIQUETA APLICADA NA BARRA PRETO </p>
                                             
                                              
                                               <p className="text-stone-400 float-left mt-6">SKU:{getInformation._id}</p>

                                                <div className="h-8 w-44 bg-slate-400 mt-16 rounded">
                                                    <p className="text-white">em até 6x sem juros</p>
                                                </div>
                                                
                                                <div className="h-12 w-full   flex">
                                                <span className="float-left text-2xl text-yellow-500 font-bold mt-2">R${getInformation.productPrice.toFixed(2)}</span>
                                                <div className="ml-96 float-right w-/11/12 h-max rounded-lg bg-black ">
                                                    <p className="break-all	text-yellow-600 mx-4 my-2 text-white">{getInformation.productDescription}</p>
                                                </div>
                                                
                                              </div>
                                                

                                                <div className="mt-12 w-full h-4 ">
                                                
                                                    <span className="float-left">SELECIONAR TAMANHO</span>
                                                                                                                  

                                                </div>
                                               
                                                <div className=" w-full  mt-4">
                                                {getInformation.productSize.map((item, index) => {
                                                                var sizeValue =  getInformation.productSize[index].size  
                                                               
                                                                console.log(getInformation.productSize[index].size)
                                                                

                                                                return (
                                                                   
                                                                    <p  className=" hover:bg-sky-700 float-left border-solid border-2 border-black rounded " onClick={() => handleoptsize(sizeValue)} value={sizeValue}>{sizeValue}</p>
                                                                    
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
                                                            <option  onClick={()=>teste0(colorValue)} value={colorValue} className="hover:h-12  cursor-pointer h-8 w-8 mt-2 border-solid border-2 border-black rounded-2xl" style={{  backgroundImage: `url("${colorValue}")` }}></option>
                                                        )
                                                        })
                                                    }
                                                    </form>
                                                    </div>
                                                
                                                
                                                    
                                                </div>
                                                
                                                <div className="  w-full mt-24 mb-4"><span className="py-4 px-4  w-32 bg-black text-white font-bold cursor-pointer" onClick={() => handleCart(getInformation)}>Adicionar ao carrinho</span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <p></p>

                    }

                  
                    <div className="h-full w-full   flex flex-wrap justify-center ">
                        
                    {
                        eldata?.map((event, index) => {
                   console.log(event)
                         
                            return (
                                    
                                <div className="bg-gray-100 w-48 h-max lg:w-60 lg:h-full    mt-2  mx-1.5      ">
                                        
           
                                <Swiper2 eldata={event.productImage}/><SwiperSlide/>
                                <div className="h-36 w-42   w-full  bg-white rounded-b-xl">
                                   
                                 
                                  
                                <p className="text-stone-500 font bold  text-center ">{event.productDescription} </p>
                          
                                <div className="h-8   w-full flex ">
                                {event.productColor.map((item)=><div className="hover:h-4  cursor-pointer h-4 w-4 mx-1 border-solid border-1 border-black rounded-2xl " style={{  backgroundImage: `url("${item.color}")` }}></div>)}
                                </div>
                                {console.log(event.productColor.map((item)=>item.color))}
                                
                                
                               <div className="w-full h-max">
                               <div onClick={() => moreDetails(event)} className="flex h-6 cursor-pointer rounded-xl mt-2 w-max float-right bg-gradient-to-r from-yellow-300 to-yellow-600 mr-2">  
                                
                                <BsCart3 className="mx-2 my-1 text-black" ></BsCart3>
                                <p className="text-black font-bold mr-2">Ver</p>
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
                    }
                

                 </div>
                 
              <SwiperMostAcessed eldata={eldata} moreDetails={moreDetails} Swiper2={Swiper2}
              
              />
              
            </section >
     
        )
    }

    export default Collection