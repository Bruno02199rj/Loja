import React, { useEffect, useState } from "react";
import { BsFillCartPlusFill, BsCartFill } from "react-icons/bs";
import asset from '../assets/Icon.png'

import { FiCheck } from "react-icons/fi";

import axios from "axios";
import PaginationComponent from "./PaginationComponent";
import Swiper from "./Swiper";
import { SwiperSlide } from "swiper/react";
import Swiper2 from "./SwiperCollection";
import Footer from "./Footer";
import seta from "../assets/seta-esquerda.png"
import Brands from "./Brands";
import SwiperMostAcessed from "./SwiperMostAcessed";
import Main from "./Main";
import SwiperCart from "./SwiperCart";
import ConsultaCorreios from "./ConsultaCorreios";

const Collection = () => {
  const [sizeOpt, setSizeOpt] = useState([]);
  const [elsize, setElSize] = useState([]);
  const [getColorValue, setGetColorValue] = useState([]);
  const [elColor, setElColor] = useState([]);
  const [elres, setelres] = useState([]);

  const [Cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState();
  const [showModal, setShowModal] = useState();
  const [showWarning, setShowWarning] = useState();
  const [post, setPost] = useState();
  const [idTransaction, setIdTransaction] = useState();
  const [getDetails, setGetDetails] = useState();
  const [getInformation, setGetInformation] = useState([]);

  const [transactionCode, setTransactionCode] = useState();

  const [eldata, setElData] = useState([]);
  const [filterItens, setFilterItens] = useState([]);
  const [booleanFilter, setBolleanFilter] = useState(false);
  const [itensPerPage, setItensPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(eldata.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = eldata.slice(startIndex, endIndex);

  const [sum, setSum] = useState();




  useEffect(() => {
    axios.get("/products").then((res) => {
      setElData(res.data);
    });
  }, []);

  console.log(Cart);
  console.log(sizeOpt);

  const modalCollection = () => {
    setShowCart(true);
    setShowModal(true);
  };

  const handleCart = (event) => {
    console.log(event); //event dando como object object

    Cart.push(event);
    sizeOpt.push(elsize);
    getColorValue.push(elColor);

    setGetDetails(false);
    //setShowWarning(true)
  };
  const handleRemove = (index) => {
    const item = Cart.slice();
    item.splice(index, 1);
    setCart(item);
    setShowModal(false);
    var des = Cart.map((item, index) => item._id);
    axios.post("/carts", { des }).then((res) => {
      console.log(res.data);
    });
  };

  const handleredirect = (item, index) => {
    var elitem = Cart.map((item, index) => item._id);
    var elitemImage = Cart.map((item, index) => item.productImage);
    var elitememit = Cart.map((item, index) => item);
    console.log(elitemImage);
    //retornando arrayvaz
    console.log(elitem);
    axios
      .post("/carts", {
        products: elitem,
        sizeOption: sizeOpt,
        colorOption: getColorValue,
        productImage: elitemImage,
      })

      .then((res) => {
        //id transaction passa

        console.log(res);
        setelres(res);
        //irfomaçoes sobre o pedido
        axios.get(`/transaction/${res.data._id}`).then((res) => {
          var transactionCode = res.data.substring(67);
          setTransactionCode(transactionCode);
          axios
            .post("/transcode", { eltransactionCode: transactionCode })
            .then((res) => {
              console.log(res);
            });

          //mandar codigo da transação para o banco

          window.location.href = `${res.data}`;
        });
      });
  };

  const moreDetails = (event) => {
    console.log(event);
    setGetInformation(event);
    setGetDetails(true);
  };

  const handleoptsize = (item) => {
    setElSize(item);
    console.log(item);
  };

  const teste0 = (item) => {
    setElColor(item);
    console.log(getColorValue);
  };

  let ress = eldata.map((event) => {
    return event.productCategory;
  });
  let unico = ress.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  const handleFilter = (event) => {
    let fil = eldata.filter((e) => e.productCategory == event);
    setFilterItens(fil);
    setBolleanFilter(true);
  };
  const soma = Cart.reduce(
    (accumulator, person) => accumulator + person["productPrice"],
    0
  );
  {
  }

  return (
    <section className="        w-full h-full  ">
      <div className=" h-max border-b-2 border-black bg-white py-2 text-black mt-14 w-full fixed z-40 flex flex-wrap justify-center"></div>

      <BsFillCartPlusFill
        size={30}
        onClick={() => modalCollection()}
        className="  hover:bg-gray-300 hover:text-black hover:animate-bounce ease-in duration-300 rounded-md h-7 block"
      />
      <blockquote class="   mb-12 text-2xlfont-bold text-center italic text-center text-slate-900"></blockquote>



      <div className="h-12 w-full fixed z-50">
        <div
          onClick={() => setShowModal(true)}
          className="h-12 w-12 cursor-pointer bg-gray-200 float-right p-2 rounded-full "
        >
          <BsCartFill size={30} />
        </div>
      </div>

      {showModal ? (
        <div>
          <div
            class="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              
              <div class="flex  min-h-full  items-end justify-center p-4 text-center items-center p-0">
              
                <div className="h-full  w-full    bg-white ">


                  <div className="h-max  w-full      ">
                 <div className="h-max z-50 flex px-4  w-full bg-white fixed ">
                  <img
                  src={seta}
                      className=" h-6  w-6 rounded-2xl   font-bold mt-2"
                      onClick={() => setShowModal(false)}
                    />
                
                   
                    <p className="flex-1  mt-2 font-bold text-lg">Carrinho</p>
                   
                  
                  
                  </div>
                    {Cart.map((event, index) => {
                      console.log(event);
                      return (
                        <div className=" flex justify-center text-start     ">
                          <div className="h-max p-[1rem] flex bg-[#F2F2F2] mb-4 rounded-md">
                          <div className="w-max  h-max   ">
                            <SwiperCart eldata={event.productImage} />
                          </div>
  
                            <div className="">
                            <div className=" h-max   w-full  text-start ml-4 ">
                            <span className="h-4 w-max font-bold ">
                              {event.productName}
                            </span>
                            <br/>  
                              
                                <span className="text-sm text-slate-500">
                                  {event._id}
                                </span>
                            
                            </div>
                            
                            <span className="ml-4  text-xs">
                              vendido e entregue por Lotus Fashion
                            </span>
                        

                            <p className="ml-4 mt-8 text-sm">
                              tamanho:{" "}
                              <span className="text-slate-500 text-sm">
                                {sizeOpt[index]}
                              </span>
                            </p>
                            <p className="ml-4 font-bold">
                              R${event.productPrice.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        </div>
                      );
                      
                    })}
                  </div>

                  <div className="   h-max w-full ">
                    <div className="flex w-full justify-center h-[4rem]   ">
                      <div className="h-12  w-[24rem] align-center">
                  
                     
                      <p className="text-slate-500 text-start ">subtotal</p>
                      </div>
                    
                      <p className="text-end font-bold"> R${soma.toFixed(2)}</p>
                  

                     
                  
                    </div>
                  </div>
                  <div className="   h-max w-full  ">
                    <div className="flex w-full justify-center h-[4rem]   ">
                      <div className="h-12  w-[24rem] align-center">
                  
                     
                      <p className="text-slate-500 text-start ">Frete</p>
                      </div>
                    
                      <p className="text-end font-bold"> R${soma.toFixed(2)}</p>
                  

                     
                  
                    </div>
                  </div>
                  <div className="   h-max w-full  border-t border-black  ">
                    <div className="flex w-full  justify-center h-[4rem]   ">
                      <div className="flex justify-center rounded-md mt-2 h-12 bg-black text-white w-[24rem] align-center">
                  
                     
                      <p className=" mt-3">Finalizar Compra</p><img className="h-4 mt-4 ml-4 w-4" src={asset}/>
                      </div>
                    
                    
                  

                     
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}

      <div className=" w-max h-max float-right  ">
        {showWarning ? (
          <FiCheck className="animate-bounce h-14 w-14" />
        ) : (
          <p></p>
        )}
      </div>

      {getDetails ? (
        <div>
          <div
            class="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto lg:overflow-hidden">
              <div class="flex min-h-full  items-end justify-center  text-center sm:items-center sm:p-0">
                
                <div className=" w-full  md:flex    ">
                 
                  <div className="h-[28rem]   w-full  bg-white  ">
                  <div className="h-12 z-50 flex px-4  w-full bg-white fixed lg:absolute">
                  <img
                  src={seta}
                      className=" h-6  w-6 rounded-2xl   font-bold mt-2"
                      onClick={() => setGetDetails(false)}
                    />
                
                   
                    <p className="flex-1  mt-2 font-bold text-lg">Detalhes</p>
                   
                  
                  
                  </div>
                    <Swiper eldata={getInformation} />
                    <SwiperSlide />
                  </div>

                  <div className="h-24 w-full md:w-max md:hidden md:m-0 md:bg-red-800 md:border-0 fixed mt-[15rem] pt-2 flex border-t-2  md:px-0 px-4 border-black bg-white">
                  <div className="h-12 text-start 	  w-24 ">
                    <p className="text-slate-600 ">Price</p>
                    <p className="font-bold  text-2xl">R${getInformation.productPrice.toFixed(2)}</p>
                  </div>
                    <div className="  w-full mt-2  lg:mt-40  mb-4">
                   
                      <span
                        className="lg:py-4 lg:px-4 p-2 float-right w-42 bg-black text-white font-bold cursor-pointer"
                        onClick={() => handleCart(getInformation)}
                      >
                        Adicionar ao carrinho
                      </span>
                   
                 
                    </div>
                  </div>

                  <div className="bg-white aling-center float-right h-[28rem] w-full  pl-4 pr-4">
                 

                 
                    <p className=" mt-2 w-70 text-2xl"></p>

                    <p className="text-stone-400  float-left text-sm mt-6">
                      cod:{getInformation._id}
                    </p>

                    <div className="h-12 w-full   flex">
                    <p className="font-bold uppercase">
                      {getInformation.productName} 
                    </p>
                    </div>

                    <p className="h-max w-96    text-start mb-4 text-slate-500 text-md break-all">
                      {getInformation.productDescription}
                      dsoadsadisaid9sa9id9asi9dasi9id9asi9dasi9idas9id9asuj98udjs8aud8sua89dusa89ud8sua98duas89usda
                    </p>

                    <div className="  w-full h-4 ">
                      <span className="float-left text-lg font-bold">Tamanho</span>
                    </div>

                    <div className=" w-full h-max  mt-4
                    ">
                      {getInformation.productSize.map((item, index) => {
                        var sizeValue = getInformation.productSize[index].size;

                        console.log(getInformation.productSize[index].size);

                        return (
                          <p
                            className=" h-12 w-12 pt-2 hover:border-2 hover:border-black text-xs font-bold text-lg  float-left border-solid border border-2 rounded-md border-slate-400 mr-2 "
                            onClick={() => handleoptsize(sizeValue)}
                            value={sizeValue}
                          >
                            {sizeValue}
                          </p>
                        );
                      })}
                    </div>

                    <div className=" w-full float-left flex ">
                      <div className=" h-max mt-[5rem] hidden  md:block w-max">
                      <span
                        className="lg:py-4 lg:px-4 p-2 float-right w-42 bg-black text-white font-bold cursor-pointer"
                        onClick={() => handleCart(getInformation)}
                      >
                        Adicionar ao carrinho
                      </span>
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}

      <div className="h-full w-full  flex flex-wrap justify-center ">
        {booleanFilter ? (
          <div className="h-max w-max flex px-4 flex-wrap justify-center">
            {filterItens?.map((event, index) => {
              return (
                <div className=" w-48 h-max lg:w-60 lg:h-full    mt-2  mx-1.5      ">
                  <Swiper2 eldata={event.productImage} />
                  <SwiperSlide />
                  <div className="h-36 w-42  flex w-full  bg-white rounded-b-xl">
                    <p className="text-stone-500 font bold  text-center ">
                      {event.productDescription}{" "}
                    </p>

                 

                    <div className="w-full h-max">
                      <div
                        onClick={() => moreDetails(event)}
                        className="flex h-max cursor-pointer rounded  w-max px-4 float-right bg-black  "
                      >
                        <p className="text-white font-bold text-center text-sm">
                          Ver
                        </p>
                      </div>
                      <div>
                        <span className="text-black ml-2">Preço</span>
                      </div>
                      <span className="text-black ml-2 font-bold">
                        R${event.productPrice}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-max w-max  flex flex-wrap justify-center">
            {eldata?.map((event, index) => {
              return (
                <div   onClick={() => moreDetails(event)} className=" w-40 md:w-48   lg:w-60 h-max   mt-2  mx-1 md:mx-1 lg:mx-1.5      ">
                  <Swiper2 eldata={event.productImage} />
                  <SwiperSlide />
                  <div className=" w-42   w-full   bg-white">
                    <p className="text-start font-bold  text-lg font bold  text-center ">
                      {event.productName}
                    </p>
                   

                    <div className="w-full h-max ">
                    
                    
                      <span className="text-[#8C8C8C]  text-sm font-bold">
                        R${event.productPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collection;
