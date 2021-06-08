// import react from 'react'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
// let heroList = ''
export const Heroes = () => {

    const getHeroes = () => {
        console.log('test')
        axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=a723f1e04ab084a12d0437077b3e90cd').then((response) =>{
            // console.log(response.data)
            setHero(response.data)
            console.log(heroList)

        })}

<<<<<<< HEAD
    useEffect(() => {

    }, [] )
=======
    // useEffect(() => {
    //
    // }, [] )
>>>>>>> a8087fb35df92d40bc8d0a19fc2449143806cca6


        return(
            <div>

            <p>


             </p>
            </div>
        )


}
