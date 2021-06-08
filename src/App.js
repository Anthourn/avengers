import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Display} from './components/display'
import Homearray from './components/array.js'
function App() {

    const [hero, setHero] = useState('Nick Fury')
    const getHeroes = (name) => {
        console.log('test')
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=a723f1e04ab084a12d0437077b3e90cd
`).then((response) =>{
            console.log(response.data)


        })}
    useEffect(() => {
        // getHeroes(hero)
        console.log(hero)
    }, [] )
  return (
      <Router>
    <div className="App">
      <h1> Avengers initiative </h1>

      <Switch>



        <Route path = '/display'>
        <Display getHeroes={getHeroes} hero={hero}/>
        </Route>


        <Route exact path = '/'>
        <Homearray setHero={setHero} hero={hero}/>
        </Route>

       </Switch>


    </div>
    </Router>
  );
}

export default App;
