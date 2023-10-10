import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
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

  return (
    <div>

{show && (
          <ul>
            {data.map((personagem) => (
              <div
                className="div"
                key={personagem.id}
              >
                <div className="times">
                  <img
                  />
                  <div className="nomes">
                    <p className="p1">{personagem.name}</p>
                    <p className="p2">{personagem.status}</p>
                  </div>
                </div>
              </div>
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
