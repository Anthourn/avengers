import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from './display-side'
import DisplayParent from './display-parent'
import Homearray from './array.js'
import {  useHistory } from 'react-router-dom'

export const Display  = (props) => {
    const history = useHistory('/')
    const [heroData, setData] = useState(null)
    const getHeroes = (name) => {

        axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}
    `).then((response) =>{
            // console.log(response.data)

            setData(response.data)
            // console.log(heroData)
        }
    )
    .catch((error) => {
        return (
            <div> Loading... </div>
        )
    })
}


    useEffect(() => {
        if (!heroData){ getHeroes(props.hero)
        }

    }, [] )
    // because state is still null on ppage load im telling it to call this, while also making a conditional which will mount the loading page in the meantime to prevent crashes
    return (
        <>
        { heroData ? <DisplayParent db={props.db} email={props.email} heroData={heroData}/> : <div> Loading... </div>}
</>

    )
}

export default Display
