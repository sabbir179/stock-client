

import Home from './pages/Home';
import Membership from './pages/Membership';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contact from './pages/Contact';
import PageError from './pages/PageError';


function App() {
  return (
    <Router>
        
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/membership" component= {Membership} />
          <Route exact path="/contact" component= {Contact} />
          <Route  component= {PageError} />
        </Switch>
        
    </Router>
  );
}

export default App;
