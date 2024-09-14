import React, { useEffect, useState } from "react";
import Noticia from "./Noticia";
import axios from "axios";

const ListaNoticias = ({ categoria, pais }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      try {
        // Construir la URL con los parámetros de categoría y país
        const url = `https://newsdata.io/api/1/latest?apikey=pub_5334341179171321c0e7bf64ac55029a6dfad&language=es${
          categoria ? `&category=${categoria}` : ""
        }${pais ? `&country=${pais}` : ""}`;

        const respuesta = await axios.get(url);
        setNoticias(respuesta.data.results);
      } catch (errors) {
        console.log("Error api", errors);
      }
    };

    if (categoria || pais) {
      getAPI();
    }
  }, [categoria, pais]);

  return (
    <div className="row">
      {noticias.map((noticia, index) => (
        <Noticia noticia={noticia} key={index} />
      ))}
    </div>
  );
};

export default ListaNoticias;
