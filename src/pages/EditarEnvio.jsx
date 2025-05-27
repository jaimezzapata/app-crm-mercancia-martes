import { useEffect, useState } from "react";
import { alertaRedireccion, alertaGeneral } from "../helpers/funciones";
import { useNavigate, useParams } from "react-router-dom";
let apiEnvios = "https://back-json-server-martes.onrender.com/envios/";
import "./EditarEnvio.css";

const EditarEnvio = () => {
  const [envio, setEnvio] = useState("");
  const [producto, setProducto] = useState("");
  const [destino, setDestino] = useState("");
  let redireccion = useNavigate();
  let { id } = useParams(); /* Desestructuración de objetos */
  console.log(id);

  function getEnvioId() {
    fetch(apiEnvios + id)
      .then((response) => response.json())
      .then((data) => {
        setEnvio(data.idEnvio);
        setProducto(data.producto);
        setDestino(data.destino);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getEnvioId();
  }, []);

  function editarEnvio() {
    let envioEditado = {
      idEnvio: envio,
      producto: producto,
      destino: destino,
    };
    fetch(apiEnvios + id, {
      method: "PATCH",
      body: JSON.stringify(envioEditado),
    })
      .then(() =>
        alertaRedireccion(
          redireccion,
          "Registro editado correctamente",
          "/home/envios"
        )
      )
      .catch(() => alertaGeneral("Error", "No se pudo editar", "error"));
  }

  return (
    <form class="form">
      Sign Up
      <input
        onChange={(e) => setEnvio(e.target.value)}
        value={envio}
        type="text"
        class="input"
        placeholder="Id Envio"
      />
      <input
        onChange={(e) => setProducto(e.target.value)}
        value={producto}
        type="text"
        class="input"
        placeholder="Producto"
      />
      <input
        onChange={(e) => setDestino(e.target.value)}
        value={destino}
        type="text"
        class="input"
        placeholder="Destino"
      />
      <button onClick={editarEnvio} type="button">
        Submit
      </button>
    </form>
  );
};

export default EditarEnvio;
