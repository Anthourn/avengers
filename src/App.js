import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Display} from './components/display'
import Homearray from './components/array.js'
import LoginPage from './components/loginpage'
import Footer from './components/footer.js'
import Library from './components/library.js'






function App() {
    const[userList, setUserList]= useState([])
    const [email, setEmail] = useState(null)
    const [hero, setHero] = useState('Nick Fury')
    const getHeroes = (name) => {
        console.log('test')
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=a723f1e04ab084a12d0437077b3e90cd
`).then((response) =>{
            console.log(response.data)


        })}
        useEffect(() => {

            axios
          .get("https://glacial-mesa-83865.herokuapp.com/testAPI")
          .then((response) => {
              response.data.map((items) => {
                  if(items.createdBy=== email ) {
                      userList.push(
                          {name:items.library[0],
                              id:items._id,
                          }

                      )
                  }
              })
              console.log(userList)
              console.log(response.data[0].id)
          })


        }, [] )
  return (

      <Router>
    <div className="App">


      <Switch>



        <Route path = '/display'>
        <Display  getHeroes={getHeroes} email={email} hero={hero}/>
        </Route>

        <Route path = '/login'>
        <LoginPage email={email} setEmail={setEmail} userList={userList} setUserList={setUserList} />
        </Route>

        <Route exact path = '/'>
        <Homearray email={email}setHero={setHero} hero={hero}/>
        </Route>

        <Route path = '/library'>
        <Library  getHeroes={getHeroes} userList={userList} email={email} hero={hero}/>
        </Route>

       </Switch>

       <Footer email={email} setEmail={setEmail} userList={userList} setUserList={setUserList}/>
    </div>
    </Router>


);

}

export default App;
