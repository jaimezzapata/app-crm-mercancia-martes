import Login from "../pages/Login";
import Home from "../Home";
import RutaProtegida from "../components/RutaProtegida";
import GestionEnvios from "../pages/GestionEnvios";
import GestionClientes from "../pages/GestionClientes";

export let enrutador = [
  {
    path: "/home/",
    element: <RutaProtegida componente={<Home />} />,
    children: [
      {
        path: "envios",
        element: <GestionEnvios />
      },
      {
        path: "clientes",
        element: <GestionClientes />
      }
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
];
