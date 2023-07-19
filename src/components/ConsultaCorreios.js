import React from 'react';
import { useState } from 'react';
import {
    calcularPrecoPrazo,
    consultarCep,
    rastrearEncomendas,
  } from 'correios-brasil';

  import { Buffer } from 'buffer';

// @ts-ignore

const ConsultaCorreios = () => {
    const { calcularPrecoPrazo } = require('correios-brasil');
    const [cep,setCep] = useState()
    const [show,setShow] = useState()
    const [Response,setResponse] = useState()

    let args = {
      // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
      sCepOrigem: '21710-232  ',
      sCepDestino: cep,
      nVlPeso: '1',
      nCdFormato: '1',
      nVlComprimento: '20',
      nVlAltura: '20',
      nVlLargura: '20',
      nCdServico: ['04014', '04510'], //Array com os códigos de serviço
      nVlDiametro: '0',
    };
    window.Buffer = Buffer;

    const res =()=>{
      calcularPrecoPrazo(args).then(response => {
        
        
        setShow(true)
        setResponse(response)
     console.log(response)
       
        }
      );
  
   
    }
   

    return (<>
    <input onChange={(e)=>setCep(e.target.value)} placeholder="Digite seu cep" className="!outline-none h-4 w-[7rem] border-b-2 border-black"></input>
                                                        <button onClick={()=>res()} className="ml-4 mr-4 p-2 bg-black text-white font-bold text-xs">Simular</button>
    {show?
   Response.map((e)=>{
    return(
      <div className='h-max text-left w-full text-sm'>
      
        <span className='text-slate-500 mr-2  '>{e.PrazoEntrega} Dias úteis</span>
        <span className='font-bold'>R$ {e.Valor}</span>
       
      </div>
      
    )
   })    
    :
    
    <p></p>}
    
    </>  );
}
 
export default ConsultaCorreios;