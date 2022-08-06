import './App.css';
import { BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import LandingPage from './pages/landing-page/LandingPage';
import Home from './pages/Home/Home';
import setProjectsToStorage from './setToStorage/setProjectsToStorage';
import setBusinessesToStorage from './setToStorage/setBusinessesToStorage';
import setRatingsToStorage from './setToStorage/setBusinessesToStorage';

import updateStoredUserInfo from './setToStorage/updateStoredUserInfo';
import ViewClickedProject from './components/ViewClickedProject/ViewClickedProject';
import PaymentsSuccess from './components/PaymentsSuccess/PaymentsSuccess';
import setMyBusinessesToStorage from './setToStorage/setMyBusinessesToStorage';
import MapWithAllProjects from './components/MapWithAllProjects';
import Rewards from './components/Rewards/Rewards';
import RegisterBusiness from './components/RegisterBusiness/RegisterBusiness';
import ListAProject from './components/ListAProject/ListAProject';
import AppBar from './components/Appbar/Appbar';
import categoriesNotInLocalStorage from './helpers/categoriesNotInLocalStorage';
import setCategoriesToLocalStorage from './setToStorage/setCategoriesToLocalStorage';
import ViewClickedCategory from './components/ViewClickedCategory/ViewClickedCategory';
import { ReactNotifications } from 'react-notifications-component';
import { useState } from 'react';
import RegisterBusiness2 from './components/RegisterBusiness/RegisterBusiness2';
import StripeConnect from './components/Stripe/StripeConnect';
import StripeComplete from './components/Stripe/StripeComplete';

function App() {  
  setProjectsToStorage()
  setRatingsToStorage()
  setBusinessesToStorage()
  updateStoredUserInfo()
  setMyBusinessesToStorage()
  const[user, updateUser] = useState({});
  function handleUpdateUser(user){
    updateUser(user);
  }
  if (categoriesNotInLocalStorage()){ setCategoriesToLocalStorage() }

  return (
    <div className="App">
      <ReactNotifications />
      <Router>
        <AnimatePresence exitBeforeEnter>
          <AppBar updateUser={handleUpdateUser} user={user} />
          <Routes>
    
              <Route path="/" exact element={<LandingPage />}/>
              <Route path="/signup" exact element={<SignUp />}/>
              <Route path="/signin" exact element={<SignIn updateUser={handleUpdateUser} user={user} />}/>
              <Route path="/home" exact element={<Home />}/>
              <Route path="/projects/:id" exact element={<ViewClickedProject />}/>
              <Route path="/payments-success" exact element={<PaymentsSuccess />}/>
              <Route path="/projects-map" exact element={<MapWithAllProjects />} />
              <Route path="/my-rewards" exact element={<Rewards updateUser={handleUpdateUser} user={user}/>} />
              <Route path="/register-a-business" exact element={<RegisterBusiness2 />} />
              <Route path="/stripe-connect" exact element={<StripeConnect />} />
              <Route path="/stripe-complete" exact element={<StripeComplete />} />
              <Route path="/list-a-project" exact element={<ListAProject />} />
              <Route path="/categories/:category" exact element={<ViewClickedCategory />} />

          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
