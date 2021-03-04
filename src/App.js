import './App.css';

import { Route, Switch } from "react-router-dom";

import Header from './Header';
import Intro from './Intro';
import Main from './Main';
import Cv from './Cv';

function App() {
  return (
    <div className="App">
      <Intro />
      <Switch>
        <Route exact path="/">
          <Header />
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
