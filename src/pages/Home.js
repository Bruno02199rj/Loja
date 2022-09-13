import Header from '../components/Header';
import Main from '../components/Main';
import Collection from '../components/Collection';
import Brands from '../components/Brands';

import { Outlet } from "react-router-dom"



var baseUrl = 'http://localhost:3001'


function Home(){

    return(
        <>
        <Header/>
        <Main/>
        <Brands/>
        <Collection/>
        </>
    )
   
}

export default Home