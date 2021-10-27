
import Home from './pages/Home';
import Membership from './pages/Membership';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Login from './pages/Login';
import HomeAfterLogin from './pages/HomeAfterLogin';
import SingleBlog from './pages/SingleBlog';
import PageError from './pages/PageError';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import TradersAfterSignup from './pages/Traders/TradersAfterSignup';
import MyStock from './pages/Traders/MyStock';
import Referral from './pages/Traders/Referral';
import SubscriptionStatus from './pages/Traders/SubscriptionStatus';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminPending from './pages/Admin/AdminPending';
import AdminReferral from './pages/Admin/AdminReferral';
import AdminBlog from './pages/Admin/AdminBlog';
import ActiveTraders from './pages/Admin/ActiveTraders';
import DeactiveTraders from './pages/Admin/DeactiveTraders';
import DeleteTraders from './pages/Admin/DeleteTraders';
import AddStock from './pages/Admin/AddStock';
import AdminSearchResult from './pages/Admin/AdminSearchResult';
import AddBlogVerification from './pages/Admin/AddBlogVerification';
import AddBlogDetail from './pages/Admin/AddBlogDetail';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          
              <Route exact path="/" component={ Home } />
              <Route exact path="/home" component={ Home } />
              <Route exact path="/membership" component={ Membership } />
              <Route exact path="/contact" component={ Contact } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/homeafterlogin" component={ HomeAfterLogin } />
              <Route exact path="/blog" component={ HomeAfterLogin } />
              <Route exact path="/blog/:blogId" component={ SingleBlog } />
              <Route exact path="/tradersaftersignup" component={ TradersAfterSignup } />
              <Route exact path="/mystock" component={ MyStock } />
              <Route exact path="/referral" component={ Referral } />
              <Route exact path="/subscriptionstatus" component={ SubscriptionStatus } />
              <Route exact path="/admindashboard" component={ AdminDashboard } />
              <Route exact path="/adminpending" component={ AdminPending } />
              <Route exact path="/adminreferral" component={ AdminReferral } />
              <Route exact path="/adminblog" component={ AdminBlog } />
              <Route exact path="/activetraders" component={ ActiveTraders } />
              <Route exact path="/deactivetraders" component={ DeactiveTraders } />
              <Route exact path="/deletetraders" component={ DeleteTraders } />
              <Route exact path="/addstock" component={ AddStock } />
              <Route exact path="/adminsearchresult" component={ AdminSearchResult } />
              <Route exact path="/addblogverification" component={ AddBlogVerification } />
              <Route exact path="/addblogdetail/:blogId" component={ AddBlogDetail } />
              <Route exact path="*" component={ PageError } />
         
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
