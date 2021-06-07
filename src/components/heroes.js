import react from 'react'
import axios from 'axios'
import React, {useState} from 'react'
// let heroList = ''
export const Heroes = () => {
    const [heroList, setHero] = useState(0)
    axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=a723f1e04ab084a12d0437077b3e90cd').then((response) =>{
        // console.log(response.data)
        setHero(response.data)
        console.log(heroList)

    }

        )

        console.log('test')
        return(
            <div>
            <h1>{heroList.data.results[0].name}</h1>
            <p> </p>
            </div>
        )


}
