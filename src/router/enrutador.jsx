import Login from "../pages/Login";
import Home from "../Home";
import RutaProtegida from "../components/RutaProtegida";
import Contenido from "../components/Contenido";

export let enrutador = [
  {
    path: "/home/",
    element: <RutaProtegida componente={<Home />} />,
    children: [
      {
        path: "envios",
        element: <Contenido />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
];
