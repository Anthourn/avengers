import react from 'react'
import { Link } from 'react-router-dom'
export const MainContent = ({heroBio}) => {
    return(
        <div className = 'main-content'>
        <h1> {heroBio.name} (Comics)</h1>
        <img className='display-photo' src ={`${heroBio.thumbnail.path}.jpg`} />
        
        <Link className = 'button' to='/'>Back </Link>
        </div>
    )
}

export default MainContent
