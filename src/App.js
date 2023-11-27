import './App.css';
import Home from './Components/Landingpage/Home';
import Navigationbar from './Components/Navbar/Navigationbar';
import Createaccount from './Components/User/Createaccount';
import Login from './Components/User/Login';
import News from './Components/Reader/News';
import Global from './Components/Reader/Global';

import {Toaster} from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Account from './Components/User/Account';
import About from './Components/About/About';



function App() {
  return (
    <div>
      <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                color: "#1e3a8a",
                fontWeight : 500,
              },
              iconTheme: {
                primary: '#1e3a8a',
              },
            },

            error: {
              style: {
                color: "#475569",
                fontWeight : 500,
              },
              iconTheme: {
                primary: '#475569',
              },
            },
          }}
        />

      <Router>
        <Navigationbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/create-newsfeed-account' Component={Createaccount} />
          <Route path='/login-newsfeed-account' Component={Login} />
          <Route path='/user-profile' Component={Account} />
          <Route path='/read-news' Component={News} />
          <Route path='/read-global-news' Component={Global} />
          <Route path='/about-me' Component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
