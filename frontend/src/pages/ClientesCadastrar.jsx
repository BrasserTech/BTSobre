import { useState } from "react";
import "./ClientesCadastrar.css";

export default function ClientesCadastrar() {
  const [tipoPessoa, setTipoPessoa] = useState("pf");

  return (
    <div className="form-container">
      <h2>Cadastro de Cliente</h2>

      {/* Seleção de tipo de cliente */}
      <div className="form-section">
        <label>Tipo de Cliente:</label>
        <select onChange={(e) => setTipoPessoa(e.target.value)} value={tipoPessoa}>
          <option value="pf">Pessoa Física</option>
          <option value="pj">Pessoa Jurídica</option>
        </select>
      </div>

      {/* Dados pessoais ou corporativos */}
      <div className="form-section">
        {tipoPessoa === "pf" ? (
          <>
            <label>Nome Completo:</label>
            <input type="text" placeholder="Digite o nome completo" />

            <label>CPF:</label>
            <input type="text" placeholder="000.000.000-00" />
          </>
        ) : (
          <>
            <label>Razão Social:</label>
            <input type="text" placeholder="Digite a razão social" />

            <label>CNPJ:</label>
            <input type="text" placeholder="00.000.000/0001-00" />
          </>
        )}

        <label>Data de Nascimento / Fundação:</label>
        <input type="date" />
      </div>

      {/* Contato */}
      <div className="form-section">
        <label>Email:</label>
        <input type="email" placeholder="exemplo@email.com" />

        <label>Telefone:</label>
        <input type="tel" placeholder="(00) 00000-0000" />

        <label>Nome do Responsável (se houver):</label>
        <input type="text" placeholder="Nome do responsável legal ou financeiro" />
      </div>

      {/* Endereço */}
      <div className="form-section">
        <label>CEP:</label>
        <input type="text" placeholder="00000-000" />

        <label>Rua:</label>
        <input type="text" placeholder="Nome da rua" />

        <label>Número:</label>
        <input type="text" placeholder="Número" />

        <label>Complemento:</label>
        <input type="text" placeholder="Apartamento, bloco, etc." />

        <label>Bairro:</label>
        <input type="text" placeholder="Bairro" />

        <label>Cidade:</label>
        <input type="text" placeholder="Cidade" />

        <label>Estado:</label>
        <input type="text" placeholder="UF" />
      </div>

      {/* Informações adicionais */}
      <div className="form-section">
        <label>Categoria do Cliente:</label>
        <select>
          <option>Comercial</option>
          <option>Residencial</option>
          <option>Governo</option>
          <option>Outros</option>
        </select>

        <label>Observações:</label>
        <textarea placeholder="Algum detalhe adicional relevante..."></textarea>
      </div>

      {/* Botões */}
      <div className="form-section">
        <button className="btn salvar">Salvar</button>
        <button className="btn cancelar">Cancelar</button>
      </div>
    </div>
  );
}
