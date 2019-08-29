import React from 'react'
import useGet from './useGet'

const url = 'https://mymoney-nepomous.firebaseio.com/movimentacoes/2019-08.json'

function App() {
  const data = useGet(url)

  return (
    <div >
      <h1>My Money</h1>
      {JSON.stringify(data)}
      { data.loading && <p>Carregando dados...</p> }

    </div>
  );
}

export default App