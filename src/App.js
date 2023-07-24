import React from "react";
import Header from "./components/Header";
import Home from "./screens/Home";
import Movimentacoes from "./screens/Movimentacoes";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/movimentacoes/:data" exact component={Movimentacoes} />
      </div>
    </Router>
  );
}

export default App;
