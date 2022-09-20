
import elmodel from '../assets/modelo2.png'


const Main = () =>{

    return(
 
        <>
        <main className="px-12 w-full inline-block mt-44">
        <div className="bg-figma-color w-full h-96 rounded-lg ">
        <figure className="float-right mr-16 ">
        <img className="h-96" alt='imagem 1' src={elmodel}></img>
        </figure>
        <div className="h-62  mt-8 inline-block ml-16  w-64">
                <div className="bg-black rotate-[-2deg]  absolute  w-28 h-12"></div>
                <span className="text-5xl inline-block  relative text-white  "> LET'S  </span><span className="text-5xl inline-block  relative text-black">EXPLORE</span>
                <div className="bg-black rotate-[-2deg]  absolute  w-44 h-12"></div>
                <span className="text-5xl inline-block  relative text-white  "> UNIQUE  </span><span className="text-5xl inline-block  relative text-black">CLOTHES</span>    
        </div>
        <p className="ml-16 mt-4">venha participar de uma expreiência incrivel conosco</p>
        <a className="h-10 px-2 rounded-xl  w-18 bg-black ml-16 mt-8 text-sm text-white py-2 inline-block  transition:ease-in duration-300 hover:scale-110 ">COMPRAR AGORA</a>
       
        </div>
      
        </main>
        </>
    )


}




export default Main