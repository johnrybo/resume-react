import './App.css';

import { Route, Switch } from "react-router-dom";

import Presentation from './Presentation';
import Header from './Header';
import Main from './Main';
import Cv from './Cv';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Presentation />
          <Main />
        </Route>
        <Route path="/cv">
          <Cv />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
