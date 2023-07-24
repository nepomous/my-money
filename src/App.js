import React from "react";
import Rest from "./rest";
import { objectMethod } from "@babel/types";
import Header from "./components/Header";
import Meses from "./Meses";
import AdicionarMes from "./AdicionarMes";

const baseURL = "https://mymoney-nepomous.firebaseio.com/";

const { useGet, usePost, useDelete } = Rest(baseURL);

function App() {
  const data = useGet("meses/");
  //const data = useGet('movimentacoes/2019-08')
  //const [postData, post] = usePost('movimentacoes/2019-08')
  //const [deleteData, remove] = useDelete()

  const saveNew = () => {
    // post({valor:10, descricao:'ola' })
  };

  const doRemove = () => {
    // remove('movimentacoes/2019-08/-Lox2YojSKR4Pjeb7Lg-')
  };

  return (
    <div>
      <div className="container">
        <Header />
        <AdicionarMes />
        <Meses />
      </div>
    </div>
  );
}

export default App;
