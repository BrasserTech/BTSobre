import { Routes, Route } from "react-router-dom";
import ClientesConsultar from "../pages/ClientesConsultar";
import ClientesCadastrar from "../pages/ClientesCadastrar";
import Vendas from "../pages/Vendas";
import Financeiro from "../pages/Financeiro";
import Relatorios from "../pages/Relatorios";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/clientes/consultar" element={<ClientesConsultar />} />
      <Route path="/clientes/cadastrar" element={<ClientesCadastrar />} />
      <Route path="/vendas" element={<Vendas />} />
      <Route path="/financeiro" element={<Financeiro />} />
      <Route path="/relatorios" element={<Relatorios />} />
    </Routes>
  );
}
