import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/Pagina3";
import Pagina4 from "./pages/Pagina4";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pagina1} exact />
        <Route path="/Pagina2" component={Pagina2} />
        <Route path="/Pagina3" component={Pagina3} />
        <Route path="/Pagina4" component={Pagina4} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
