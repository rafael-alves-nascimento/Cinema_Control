
// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import   {useParams} from "react-router-dom";
import './informacao.css'
import Axios from 'axios'

const Infos = () => {

    
    const [numero,setNumero] = useState('')
    const [capacidade,setCapacidade] = useState('')
    const [horario,setHorario] = useState('')
    const [sinopse,setSinopse] = useState('')
    const [duracao,setDuracao] = useState('')
    const [filme,setFilme] = useState('')
    const [ingressosdisp,setIngressosdisp] = useState('')
    const [ingressosvend,setIngressosvend] = useState('')
    const [faturamento,setFaturamento] = useState('')
    const [desativar,setDesativar] = useState(false)
    const [cor,setCor] = useState("")

    const params = useParams();
    const id = params.id

    const Mudarcor = {"background-color": cor}

    useEffect(() => {
        Axios.post("http://localhost:3010/cinema/verDados",{
            id:id
        })
        .then((res) => {
            setNumero(res.data[0].Numero_sala)
            setCapacidade(res.data[0].Capacidade)
            setHorario(res.data[0].Horario)
            setSinopse(res.data[0].SINOPSE)
            setDuracao(res.data[0].DURACAO)
            setFilme(res.data[0].FILME)
            setIngressosdisp(res.data[0].INGRESSOSDISP)
            setIngressosvend(res.data[0].INGRESSOSVEND)
            setFaturamento(res.data[0].FATURAMENTO)
            setCor(res.data[0].Cor)

        })
    },[])




    function comprarIngressos(){
        if(ingressosdisp === 0){
            setDesativar(true)
        }

        if(ingressosdisp >= 1){
            Axios.put("http://localhost:3010/cinema/Atualizar",{
                id:id
            }).then((res) => {
                console.log(res.data)
            })
            window.location.reload();
       }
        
    }

    function Sinopse () {
        let infos = document.getElementById("infos-sala")
        var textArea = document.createElement("textarea");
        textArea.className = "text"
        textArea.textContent = sinopse
        textArea.setAttribute('disabled', true);
        infos.appendChild(textArea)
        console.log(sinopse)
    }


    return(
        <div className="container-sala">
            <div className="infos-sala" style={Mudarcor} id="infos-sala">
                <h5 className="texto_infos">Numero da sala: {numero}</h5>
                <h5 className="texto_infos">Título do filme: {filme}</h5>
                <h5 className="texto_infos">Duração do filme: {duracao}</h5>
                <h5 className="texto_infos">Capacidade da sala: {capacidade}</h5>
                <h5 className="texto_infos">Horário da sessão: {horario}</h5>
                <h5 className="texto_infos">Ingressos vendidos: {ingressosvend}</h5>
                <h5 className="texto_infos">Ingressos restantes: {ingressosdisp}</h5>
                <button className="botao" disabled={desativar} onClick={comprarIngressos}> COMPRAR </button>
                <button className="botao" onClick={Sinopse}> Ver Sinopse</button>
                <h5 className="texto_infos" >Faturamento: {faturamento} R$</h5>
                
            </div>

        </div>
    )
}

export default Infos;