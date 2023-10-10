import React from "react"
import { useParams } from "react-router-dom"

export default function Personagem(){
const nome = useParams()
    return(
        <>
        <h1>
            PERSONAGEM PAGE
        </h1>
        <button onClick={()=>{

            console.log(nome)
        }} >Console.log</button>
        </>
    )
}