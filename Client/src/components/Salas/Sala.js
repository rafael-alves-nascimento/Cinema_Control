import React, { useState, useEffect } from "react";
import "./Salas.css"
import { Link } from 'react-router-dom';
import Axios from 'axios'



function Salas() {

    const [dados, setDados] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11])
    const [array,setArray] = useState([]);

    useEffect(() => {
        let listaId = [];
        Axios.get("http://localhost:3010/cinema/verSalas")
        .then((response) => {
            setArray(response.data)
        })
    },[])


    return (
        <div>
            <div className="header">
                <h1></h1>
                <h1>Cinema</h1>
                <h1></h1>
            </div>

            <div className="container">
                {array.map(({IDSALAS,NUMERO_SALA,HORARIO}) => {
                    return (
                        <div className="salas">
                            <h5>{NUMERO_SALA}</h5>
                            <h5>horario da seção:{HORARIO} </h5>
                            <Link to={`Infos/${IDSALAS}`}>
                                <button  className="botao">Click</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )


}

export default Salas;