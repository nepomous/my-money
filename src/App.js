import React from 'react'
import Rest from './rest'
import { objectMethod } from '@babel/types'

const baseURL = 'https://mymoney-nepomous.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)

function App() {
  const data = useGet('meses/')
  //const data = useGet('movimentacoes/2019-08')
  //const [postData, post] = usePost('movimentacoes/2019-08')
  //const [deleteData, remove] = useDelete()
    
  const saveNew = () => {
    // post({valor:10, descricao:'ola' })
  }

  const doRemove = () => {
    // remove('movimentacoes/2019-08/-Lox2YojSKR4Pjeb7Lg-')
  }

  return (
    <div >
      <div className='container'>
        <nav className='navbar navbar-light bg-light'>
          <div className='container'>
            <a className='navbar-brand'>My Money</a>
          </div>        
        </nav>  
        
        <h2>Adicionar Mês</h2>

        <select>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
        </select>
        <select>
          <option value='01'>01</option>
          <option value='02'>02</option>
        </select>
        <button>Adicionar Mes</button>
        {
          data.loading && <span>Carregando.....</span>
        }
        {
          !data.loading && (
            <table className='table'>
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
                {
                  //object.keys retorna todas as chaves do objeto Data
                  Object
                    .keys(data.data)
                    .map(mes =>{
                      return(
                        <tr key={mes}>
                          <td>{mes}</td>
                          <td>{data.data[mes].previsao_entrada}</td>
                          <td>{data.data[mes].entradas}</td>
                          <td>{data.data[mes].previsao_saida}</td>
                          <td>{data.data[mes].saidas}</td>
                        </tr>
                      )
                    })
                }              
              </tbody>
            </table>
          )
        }

        {/*<pre>{JSON.stringify(data)}</pre> */}
      </div>
    </div>
  );
}

export default App