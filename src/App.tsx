import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;

/*
    <BrowserRouter> -> Serve para conseguirmos acessar as rotas utilizando
    a barra. ex: http://localhost:3000/repository
*/
