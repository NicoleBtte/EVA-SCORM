import React from "react";
import Inicio from "./component/Inicio";
import Actividad from "./component/Actividad";
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/actividad' component={Actividad}/>
      </Switch>
      </Router>
  );
}

export default App;
