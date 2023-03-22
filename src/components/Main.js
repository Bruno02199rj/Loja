
import elmodel from '../assets/modelo2.png'


const Main = () =>{

    return(
 
        <>
        <main className="px-0 w-full  inline-block mt-4">
        <div className="  bg-gradient-to-r from-yellow-300 to-yellow-600 min-w-full h-96   ">
        <figure className="float-right mr-16 ">
        <img className="h-96 hidden md:block  " alt='imagem 1' src={elmodel}></img>
        </figure>
        <div className="h-62  mt-8 inline-block ml-16  w-64  ">
                <div className="bg-white rotate-[-2deg]  absolute  w-28 h-12"></div>
                <span className="text-5xl inline-block  relative text-black  "> LET'S  </span><span className="text-5xl inline-block  relative text-black">EXPLORE</span>
                <div className="bg-[#ebd96b] rotate-[-2deg]  absolute  w-44 h-12"></div>
                <span className="text-5xl inline-block  relative text-black  "> UNIQUE  </span><span className="text-5xl inline-block  relative text-black">CLOTHES</span>    
        </div>
        <p className="ml-16 mt-4">venha participar de uma expreiência incrivel conosco</p>
        <a className="h-10 px-2 rounded-xl  w-18 bg-black ml-16 mt-8 text-sm text-white py-2 inline-block  transition:ease-in duration-300 hover:scale-110 ">COMPRAR AGORA</a>
       
        </div>
      
        </main>
        </>
    )


}




export default Main