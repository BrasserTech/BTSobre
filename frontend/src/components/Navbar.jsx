import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">📊 Meu ERP</span>

      <div className="dropdown">
        <button className="dropbtn">Cadastros</button>
        <div className="dropdown-content">
          <div className="submenu">
            <span className="submenu-title">Clientes</span>
            <div className="submenu-content">
              <Link to="/clientes/consultar">Consultar</Link>
              <Link to="/clientes/cadastrar">Cadastrar</Link>
            </div>
          </div>
        </div>
      </div>

      <Link to="/vendas">Vendas</Link>
      <Link to="/financeiro">Financeiro</Link>
      <Link to="/relatorios">Relatórios</Link>
    </nav>
  );
}
