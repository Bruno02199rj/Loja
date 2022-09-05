
import React, {useEffect,useState} from "react";

import api from "../Api/api";

const Collection = () =>{

    const [eldata, setData] = useState('')

    useEffect(() => {
        api.get('/products').then(res=>{
            setData(res.data)
            
        })
    }, []);

   

    return(
       
        <section className=" h-96 ml-12 mr-1 flex">
            <div className="bg-red-200 mt-10 inline-block w-1/6  h-52">
                <p>{eldata[0]?.productName} </p>
            </div>
            <div className="bg-red-200 mt-10 inline-block w-1/6 ml-12 h-52"></div>
            <div className="bg-red-200 mt-10 inline-block w-1/6 ml-12 h-52"></div>
            <div className="bg-red-200 mt-10 inline-block w-1/6 ml-12 h-52"></div>
            <div className="bg-red-200 mt-10 inline-block w-1/6 ml-12 mr-12 h-52"></div>
        </section>
       
    )
}

export default Collection