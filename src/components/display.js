import React, {useState, useEffect} from 'react'
import axios from 'axios'
export const Display  = ({hero}) => {

    const getHeroes = (name) => {
        console.log('test')
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=a723f1e04ab084a12d0437077b3e90cd
    `).then((response) =>{
            console.log(response.data)


        })}

    useEffect(() => {
        getHeroes(hero)
        // console.log(hero)
    }, [] )
    return (
        <p>Hello {hero}</p>
    )
}

export default Display
