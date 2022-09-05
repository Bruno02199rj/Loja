

const Header = () =>{

  

    return(
        <>
            <header className=" mt-8 w-full h-8 ">
                <figure className="inline-block">
                    <img className="h-8 ml-12" src="https://www.fashioncosmeticos.com.br/wp-content/uploads/2021/01/Logo_fashion.png"/>
                </figure>
               
               <nav className=" h-8 w-max mr-12 float-right inline-block">
                <ul className="flex">
                    <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>CATALOGO</a></li>
                    <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>FASHION</a></li>
                    <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>FAVORITOS</a></li>
                    <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>LIFESTYLE</a></li>
                    <li className="px-4 hover:bg-black hover:text-white ease-in duration-300 rounded-md h-7"><a>ENTRAR</a></li>
                </ul>
               </nav>
            </header>
        </>
    )
}

export default Header