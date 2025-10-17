import React from "react";
import Rest from "../../utils/rest";
import { Link } from "react-router-dom";

const baseURL = "https://mymoney-nepomous.firebaseio.com/";

const { useGet } = Rest(baseURL);

const Meses = () => {
  const data = useGet("meses");
  if (data.loading) {
    return <span>Carregando.....</span>;
  }
  return (
    Object.keys(data.data).length > 0 && (
      <table className="table">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Previsao Entrada</th>
            <th>Entrada</th>
            <th>Previsao Saída</th>
            <th>Saída</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.data).map((mes) => {
            return (
              <tr key={mes}>
                <td>
                  <Link to={`/movimentacoes/${mes}`}>{mes}</Link>
                </td>
                <td>{data.data[mes].previsao_entrada}</td>
                <td>{data.data[mes].entradas}</td>
                <td>{data.data[mes].previsao_saida}</td>
                <td>{data.data[mes].saidas}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
};

export default Meses;
