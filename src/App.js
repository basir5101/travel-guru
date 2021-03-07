import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingInfo from './Components/BookingInfo/BookingInfo';
import Header from './Components/Header/Header';
import Home from './pages/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TravelInfo from './Components/TravelInfo/TravelInfo';
import Footer from './Components/Footer/Footer';


export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLogged: false
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/travel-info/:placeId'>
            <TravelInfo />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/booking-info'>
            <BookingInfo />
          </PrivateRoute>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
