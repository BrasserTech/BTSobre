import { useState } from "react";
import "./ClientesCadastrar.css";

export default function ClientesCadastrar() {
  const [tipoPessoa, setTipoPessoa] = useState("pf");

  return (
    <div className="form-container">
      <h2>Cadastro de Cliente</h2>

      <div className="form-row">
        <label>Tipo de Cliente: *</label>
        <select onChange={(e) => setTipoPessoa(e.target.value)} value={tipoPessoa}>
          <option value="pf">Pessoa Física</option>
          <option value="pj">Pessoa Jurídica</option>
        </select>
      </div>

      <div className="form-row">
        {tipoPessoa === "pf" ? (
          <>
            <div className="form-group">
              <label>Nome Completo: *</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>CPF: *</label>
              <input type="text" />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Razão Social: *</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>CNPJ: *</label>
              <input type="text" />
            </div>
          </>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Data de Nascimento / Fundação:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Categoria: *</label>
          <select>
            <option>Comercial</option>
            <option>Residencial</option>
            <option>Governo</option>
            <option>Outros</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email: *</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Telefone: *</label>
          <input type="tel" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group" style={{ flex: 2 }}>
          <label>Responsável (se houver):</label>
          <input type="text" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>CEP: *</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Bairro: *</label>
          <input type="text" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group" style={{ flex: 2 }}>
          <label>Rua: *</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Número: *</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Complemento:</label>
          <input type="text" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cidade: *</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Estado: *</label>
          <input type="text" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group" style={{ flex: 1 }}>
          <label>Observações:</label>
          <textarea></textarea>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn salvar">Salvar</button>
        <button className="btn cancelar">Cancelar</button>
      </div>
    </div>
  );
}
