import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Board from './views/Board';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/board" component={Board} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
