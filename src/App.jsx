

import Home from './pages/Home';
import Membership from './pages/Membership';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contact from './pages/Contact';
import Login from './pages/Login';
import HomeAfterLogin from './pages/HomeAfterLogin';
import SingleBlog from './pages/SingleBlog';
import PageError from './pages/PageError';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <Router>
        <Header />
        <Switch>
          
          <Route exact path="/" component= {Home} />
          
          <Route exact path="/membership" component= {Membership} />
          <Route exact path="/contact" component= {Contact} />
          <Route exact path="/login" component= {Login} />
          <Route exact path="/homeafterlogin" component={ HomeAfterLogin } />
          <Route exact path="/blog" component={ HomeAfterLogin } />
          <Route exact path="/blog/:blogId" component={ SingleBlog } />
          <Route  component= {PageError} />
         
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
