import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Header";
import Cv from "./cv/Cv";
import Home from './home/Home'

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cv">
            <Cv />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
