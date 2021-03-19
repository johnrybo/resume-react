import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Presentation from "./home/Presentation";
import Main from "./home/Main";
import Cv from "./cv/Cv";

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
        <Route
          path={["/http:", "/https:"]}
          component={(props) => {
            window.location.replace(props.location.pathname.substr(1));
            return null;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
