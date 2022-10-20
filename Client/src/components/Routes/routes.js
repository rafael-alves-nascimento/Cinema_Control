import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Salas from "../Salas/Sala";
import Infos from "../info/informacao";


const Rotas = () =>{

    return(
        <div className="rotas">
        <BrowserRouter >
          <Routes>
           <Route path='/' element={<Salas/>} /> 
           <Route path='Infos/:id' element={<Infos/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default Rotas;

