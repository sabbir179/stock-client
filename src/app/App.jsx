
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Membership from '../pages/Membership';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import PageError from '../pages/PageError';
import { useDispatch } from 'react-redux';
import { fetchAuthUser } from '../redux/slices/auth.slice';
import { PrivateRoute } from '../hoc/PrivateRoute';
import TraderPage from '../pages/Trader';
import AdminPage from '../pages/Admin';
import Layout from '../components/Layout';
import AuthPage from '../pages/Auth';
import { Routes, UserRole } from '../constants';

function App() {

  const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAuthUser())
  }, [dispatch])

  return (
    <Router>
      <Layout>
        <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/membership" component={ Membership } />
              <Route exact path="/contact" component={ Contact } />
              <Route path="/auth" component={ AuthPage } />
              <PrivateRoute path={Routes.TRADER} roles={[UserRole.TRADER]} component={ TraderPage } />
              <PrivateRoute path={Routes.ADMIN} roles={[UserRole.ADMIN]} component={ AdminPage } />
              <Route path="*" component={ PageError } />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
