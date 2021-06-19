import react from 'react'
import Sidebar from './display-side'
import MainContent from './display-main'
import { Link } from 'react-router-dom'


export const DisplayParent = (props) => {
    return (
        < div className = 'display-content' >

        <Sidebar db={props.db} email={props.email} comicData={props.heroData.data.results[0].comics.items}/>
        <MainContent heroBio= {props.heroData.data.results[0]}/>
        <div className = 'description'>

         {props.heroData.data.results[0].description}
         </div>

        </div>
    )
}

export default DisplayParent
