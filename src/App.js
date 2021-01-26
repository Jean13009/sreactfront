import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { HashRouter, Switch, Route } from "react-router-dom";
import CustomersPage from './pages/CustomersPage';


const App = () => {
  return (
    <HashRouter>
    <Navbar />
    
    <main className="container pt-5">
    <Switch>
    <Route path="/customers" component={CustomersPage} />
    <Route path="/" component={CustomersPage} />
    </Switch>
    </main>
    </HashRouter>
    );
  };
  
  export default App;
  