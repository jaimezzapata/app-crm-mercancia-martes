import Login from "../pages/Login";
import Home from "../Home";
import RutaProtegida from "../components/RutaProtegida";
import GestionEnvios from "../pages/GestionEnvios";
import GestionClientes from "../pages/GestionClientes";
import EditarEnvio from "../pages/EditarEnvio";

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
      },
      {
        path: "editar/:id",
        element: <EditarEnvio />
      }
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
];
