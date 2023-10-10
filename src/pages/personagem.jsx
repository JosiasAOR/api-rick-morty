import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Personagem() {
  const [data, setData] = useState("");
  const [show, setShow] = useState("");
  const id = useParams();

  //https://rickandmortyapi.com/api/character/Id do personagem
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/1`)
      .then((response) => {
        const procura = response.data;
        setData(procura);
        setShow(true);
        console.log(procura);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, [id]);

  return (
    <>
      <h1>PERSONAGEM PAGE</h1>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        Console.log
      </button>
    </>
  );
}
