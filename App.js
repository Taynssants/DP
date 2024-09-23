import React from 'react'
import Menu from './Menu'
import {Route, Routes} from 'react-router-dom'
import CriaProduto from './views/CriaProduto'
import Selecionados from './views/Selecionados';
import { Provider } from 'react-redux';
import store from './reducers/store';
import Produtos from './views/Produtos';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Menu />
        <Routes>
          <Route path='/Produtos' element={<Produtos />} />
          <Route path='/CriaProduto' element={<CriaProduto />} />
          <Route path='/Selecionados' element={<Selecionados />} />
        </Routes>
      </div>
    </Provider>
  );
}


export default App