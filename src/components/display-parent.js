import react from 'react'
import Sidebar from './display-side'
import MainContent from './display-main'
import { Link } from 'react-router-dom'
export const DisplayParent = ({heroData}) => {
    return (
        < div className = 'display-content' >
        <Sidebar comicData={heroData.data.results[0].comics.items}/>
        <MainContent heroBio= {heroData.data.results[0]}/>
        <div className = 'description'>
        
         {heroData.data.results[0].description}
         </div>

        </div>
    )
}

export default DisplayParent
