import React from "react";
import Rest from "../../utils/rest";

const baseURL = "https://mymoney-nepomous.firebaseio.com/";

const { useGet, usePost, useDelete } = Rest(baseURL);

const AdicionarMes = () => {
  return (
    <React.Fragment>
      <h2>Adicionar Mês</h2>

      <select>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
      <select>
        <option value="01">01</option>
        <option value="02">02</option>
      </select>
      <button>Adicionar Mes</button>
    </React.Fragment>
  );
};

export default AdicionarMes;
