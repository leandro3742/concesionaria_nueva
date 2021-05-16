import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Layout from './Componentes/layout';
import Home from './Pages/Home';
import Nosotros from './Pages/Nosotros';
import Autos0Km from './Pages/Autos0Km.js';
import AutosUsados from './Pages/AutosUsados';
import Contactanos from './Pages/Contactanos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Nosotros" component={Nosotros} />
            <Route exact path="/Autos_0Km" component={Autos0Km} />
            <Route exact path="/Autos_Usados" component={AutosUsados} />
            <Route exact path="/Contactanos" component={Contactanos} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
