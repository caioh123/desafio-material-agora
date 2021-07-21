import { HomePage } from './pages/HomePage/HomePage'
import { HeroesPage } from './pages/HeroesPage/HeroesPage'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/heroes" exact component={HeroesPage} />
      </Switch>

    </Router>

  );
}

export default App;
