
    import React, { useEffect, useState } from "react";
    import { BsFillCartPlusFill } from "react-icons/bs"
    import { IoMdCloseCircle } from "react-icons/io"
    import { MdDeleteForever } from "react-icons/md"
    import { FiCheck } from "react-icons/fi"
    import axios from "axios";

    const Collection = () => {



        const [sizeOpt,setSizeOpt] = useState([])
        const [resId, setResId] = useState()
        const [eldata, setData] = useState([])
        const [itensPerPage, setItensPerPage] = useState(6)
        const [currentPage, setCurrentPage] = useState(0)
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

        const pages = Math.ceil(eldata.length / itensPerPage)
        const startIndex = currentPage * itensPerPage
        const endIndex = startIndex + itensPerPage
        const currentItens = eldata.slice(startIndex, endIndex)






        useEffect(() => {
            axios.get('/products').then(res => {
                setData(res.data)
                console.log(res.data)

            })
        }, [setData]);

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
                            //window.location.href = `${res.data}`
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

            <section className="  h-screen  ml-12 mr-1  flex">

                <div className=" mt-10   inline-block    h-52">

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

                                            <IoMdCloseCircle className="float-right mb-8 " onClick={() => setShowModal(false)} size={30}></IoMdCloseCircle>
                                            <h1>Carrinho</h1>

                                            {Cart.map((event, index) => {
                                                console.log(event)
                                                return (
                                                    <div className="">
                                                        <div className="w-full h-max  bg-red-100">
                                                            <MdDeleteForever className="float-right " onClick={(event, index) => handleRemove(event, index)} size={30}></MdDeleteForever>
                                                            <div className="flex m-4">
                                                                <img className="h-16 w-16 " src={event.productImage} ></img>
                                                                <p className=" ml-32">{event.productName}</p>
                                                                <p className="ml-32">{event.productPrice.toFixed(2)}R$</p>
                                                                <p>tamanho: {sizeOpt[index]}</p>
                                                               <div className=" h-8 w-8 mt-2 border-solid border-2 border-black rounded-2xl ml-2" style={{  backgroundImage: `url("${getColorValue[index]}")` }}></div>
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


                    <div className=" w-max h-max float-right text-green-500 ">
                        {
                            showWarning ? <FiCheck className="animate-bounce h-14 w-14" /> : <p></p>
                        }


                    </div>

                    <BsFillCartPlusFill size={30} onClick={() => modalCollection()} className='float-right  hover:bg-gray-300 hover:text-black hover:animate-bounce ease-in duration-300 rounded-md h-7' />

                    <div className="mx-12 relative left">

                        {Array.from(Array(pages), (item, index) => {

                            return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} className="px-4  mr-4 bg-black text-white hover:scale-125 rounded justify-content align-center">{index + 1}</button>
                        })}

                    </div>

                    {
                        getDetails ? <div>


                            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">


                                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                                <div class="fixed inset-0 z-10 overflow-y-auto">
                                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                        <div className="h-max w-11/8  mt-32 flex">

                                            <div className="h-96 w-96 ml-16 ">
                                                <img className="h-full w-full" src={getInformation.productImage}></img>


                                            </div>


                                            <div className="bg-white float-right h-96 w-full mr-16 pl-4 pr-4">
                                                <p className="float-right h-6 w-6 rounded-2xl bg-black text-white font-bold mt-2" onClick={() => setGetDetails(false)} >X</p>
                                                <p className=" mt-2 text-2xl">VESTIDO CURTO EM PONTO ROMA COM VIÉS CONTRASTANTE E ETIQUETA APLICADA NA BARRA PRETO </p>
                                                <p className="text-stone-400 float-left mt-6">SKU:{getInformation._id}</p>

                                                <div className="h-8 w-44 bg-slate-400 mt-16 rounded">
                                                    <p className="text-white">em até 6x sem juros</p>
                                                </div>

                                                <span className="float-left text-2xl text-black font-bold mt-4">R${getInformation.productPrice.toFixed(2)}</span>

                                                <div className="mt-12 w-full h-4 ">
                                                    <span className="float-left mt-4">SELECIONAR TAMANHO</span>
                                                                                                                  

                                                </div>
                                                <div className=" w-full  mt-8">
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
                                                        console.log(colorValue)

                                                        return(
                                                            <option  onClick={()=>teste0(colorValue)} value={colorValue} className="hover:h-12  cursor-pointer h-8 w-8 mt-2 border-solid border-2 border-black rounded-2xl" style={{  backgroundImage: `url("${colorValue}")` }}></option>
                                                        )
                                                        })
                                                    }
                                                    </form>
                                                    </div>
                                                
                                                
                                                    
                                                </div>
                                                
                                                <div className="  w-full mt-24"><span className="py-4 px-4 w-32 bg-black text-white font-bold cursor-pointer" onClick={() => handleCart(getInformation)}>Adicionar ao carrinho</span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <p>nao mostrar</p>

                    }


                    {
                        currentItens?.map((event, index) => {
                            return (

                                <div className="  bg-[#f4f6f5] rounded-xl mt-10 inline-block  ml-12 h-80">

                                    <img className="w-48 h-32" src={event?.productImage}></img>
                                    <span> {event?.productQuantity}</span>
                                    <p>{event.productName}</p>
                                    <p>{event.productPrice.toFixed(2)}</p>

                                    <p onClick={() => moreDetails(event)}>x</p>

                                    <p className="text-fuchsia-700 font-bold mx-12 mt-2">Cor: {event?.productDescription}</p>
                                    <p className="text-fuchsia-700 font-bold mx-12 mt-2"> Tamanho: M</p>

                                    <span class="mt-24 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                        <span class="relative text-white"><p className="px-8 ">R$: {event?.productPrice}</p></span>
                                        <p>testeste</p>

                                    </span>

                                </div>


                            )
                        })
                    }

                </div >

            </section >


        )
    }

    export default Collection