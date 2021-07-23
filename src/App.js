import { HomePage } from "./pages/HomePage/HomePage";
import { HeroesPage } from "./pages/HeroesPage/HeroesPage";
import { HeroDetails } from "./pages/HeroDetails/HeroDetails";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/heroes" exact component={HeroesPage} />
        <Route path="/hero/details/:id" exact component={HeroDetails} />
      </Switch>
    </Router>
  );
}

export default App;
