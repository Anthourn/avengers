import react from 'react'
import Sidebar from './display-side'
import MainContent from './display-main'
import { Link } from 'react-router-dom'
export const DisplayParent = ({heroData}) => {
    return (
        <>
        <Sidebar comicData={heroData.data.results[0].comics.items}/>
        <MainContent heroBio= {heroData.data.results[0]}/>
        <Link className = 'button' to='/'>Back </Link>
        </>
    )
}

export default DisplayParent
