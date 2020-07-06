import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;

/*
    <Switch> -> Garante que apenas uma rota seja exibida por vez

    :repository+ -> O + quer dizer que tudo que vem depois da barra é o parâmetro em sí
    (o nome do parâmetro foi estabelecido como repository)
*/
