import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from './display-side'
import DisplayParent from './display-parent'
export const Display  = ({hero}) => {

    const [heroData, setData] = useState(null)


    const getHeroes = (name) => {

        axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=a723f1e04ab084a12d0437077b3e90cd
    `).then((response) =>{
            // console.log(response.data)

            setData(response.data)
            // console.log(heroData)
        })}

    useEffect(() => {
        if (!heroData){ getHeroes(hero)
        }
        console.log(heroData)
    }, [] )
    // because state is still null on ppage load im telling it to call this, while also making a conditional which will mount the loading page in the meantime to prevent crashes
    return (
        <>
        { heroData ? <DisplayParent heroData={heroData}/> : <div> Loading... </div>}
</>

    )
}

export default Display
