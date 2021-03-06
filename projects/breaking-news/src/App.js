import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import Newses from './Components/Newses/Newses';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Components/Details/Details';
import Contacts from './Components/Contacts/Contacts';
import Error from './Components/Error/Error';

function App() {
  const [country,setCountry] = useState([])
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data=>setCountry(data))
    })
  return (
    <div container className="App">
      <Header></Header>
  <Router>
  <Switch>
         <Route path="/Details/:alpha3Code"><Details country={country}></Details> </Route>
         <Route path="/Home">
         <Newses country={country}></Newses>
         </Route>
         <Route exact path="/"><Newses country={country}></Newses></Route>
         <Route path="/Contacts">
           <Contacts></Contacts>
         </Route>
         <Route path="*">
           <Error></Error>
         </Route>
         
         
     </Switch>
  </Router>

    </div>
  );
}

export default App;
