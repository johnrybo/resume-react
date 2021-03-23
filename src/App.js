import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Header";
import CVReactFullpage from "./cv/CVReactFullpage";
import HomeReactFullPage from "./home/HomeReactFullpage";
import PageAnimation from "./components/PageAnimation";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Header title="CV" link="/cv" />
            <PageAnimation>
              <HomeReactFullPage />
            </PageAnimation>
          </Route>
          <Route path="/cv">
            <Header title="Hem" link="/" />
            <PageAnimation>
              <CVReactFullpage />
            </PageAnimation>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
