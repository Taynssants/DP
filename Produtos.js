import React from 'react';
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProdutoService from '../services/ProdutoService';
import { adicionaProduto, removerProduto } from '../reducers/actions';

function Produto(){
    const params = useParams();
    const [produto, setProduto] = 'React.useState'({nome:'', preco: '', imagemUrl:'', validade: ''}) 
    
    React.useEffect(() => {
        const id = params.id;
        ProdutoService.getOneProduct(id)
        .then(produto = setProduto(produto))
    }, [])

    const dispatch = useDispatch();
    const listadeprodutos = useSelector(state => state.listadeprodutos);
  
    const handleAdd = () => {
      const novoProduto = { id: Date.now(), nome: produto };
      dispatch(adicionaProduto(novoProduto));
      setProduto('');
    };
  
    const handleRemove = (id) => {
      dispatch(removerProduto(id));
    };
  
    return (
      <div>
        <input
          type="text"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <button onClick={handleAdd}>Adicionar Produto</button>
        <ul>
          {listadeprodutos.map((prod) => (
            <li key={prod.id}>
              {prod.nome}
              <button onClick={() => handleRemove(prod.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Produto;
  