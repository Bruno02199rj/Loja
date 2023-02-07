import React from 'react';


const PaginationComponent = ({setCurrentPage,pages}) =>{

    return(
        <div>
            
 {Array.from(Array(pages), (item, index) => {

return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} className="px-4  mr-4 bg-black text-white hover:scale-125 rounded justify-content align-center ">{index + 1}</button>
})}
        </div>
       

    )


}


export default PaginationComponent