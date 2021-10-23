
import './App.css';
import Home from './pages/Home';
import Membership from './pages/Membership';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import PageError from './pages/PageError';


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/membership" component= {Membership} />
          <Route exact path="/contact" component= {Contact} />
          <Route  component= {PageError} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
