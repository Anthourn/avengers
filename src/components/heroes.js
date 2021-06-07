import react from 'react'
import axios from 'axios'
import React, {useState} from 'react'
// let heroList = ''
export const Heroes = () => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=a723f1e04ab084a12d0437077b3e90cd').then((response) =>{
        console.log(response.data)
     // const [heroList, setHero] = useState(0)
    }

        )

        console.log('test')
        return(
            <div>
            <h1>test</h1>
            <p> </p>
            </div>
        )


}
