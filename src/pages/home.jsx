import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [procura, setProcuta] = useState("");
  const nome = useParams.nome;

  useEffect(() => {
    apiRickAndMorty();
  }, [nome]);

  function apiRickAndMorty() {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        const clubesData = response.data;
        setData(clubesData.results);
        setShow(true);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }
  function procurarPersonagem(nome) {
    setShow(false);
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${nome}`)
      .then((response) => {
        const procura = response.data;
        setData(procura.results);
        setShow(true);
        console.log(procura);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }
  return (
    <div>
      <div>
        <h3>PROCURAR PERSONAGEM</h3>
        <input
          onChange={(event) => {
            setProcuta(event.target.value);
          }}
        />
        <button
          onClick={() => {
            procurarPersonagem(procura);
          }}
        >
          GO
        </button>
      </div>

      {show && (
        <ul>
          {data.map((personagem) => (
            <Link to={`personagem/${personagem.id}`}>
            
            <div className="div" key={personagem.id}>
              <div className="times">
                <img src={personagem.image} />
                <div className="nomes">
                  <p className="p1">{personagem.name}</p>
                  <p className="p2">{personagem.status}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </ul>
      )}

      <button
        onClick={() => {
          console.log(data);
        }}
      >
        console.log
      </button>
      <h1>HOME PAGE AQUI</h1>
    </div>
  );
}
