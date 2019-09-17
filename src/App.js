import React from 'react'
import useGet from './useGet'
import usePost from './usePost'
import axios from 'axios'
import useDelete from './useDelete'


const url = 'https://mymoney-nepomous.firebaseio.com/movimentacoes/2019-08.json'

function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [deleteData, remove] = useDelete()
    
  const saveNew = () => {
    post({valor:10, descricao:'ola' })
  }

  const doRemove = () => {
    remove('url')
  }

  return (
    <div >
      <h1>My Money</h1>
      {JSON.stringify(data)}
      { data.loading && <p>Carregando dados...</p> }      
      <button onClick={saveNew} > Salvar </button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove} > Deletar </button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App