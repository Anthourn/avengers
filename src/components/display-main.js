import react from 'react'

export const MainContent = ({heroBio}) => {
    return(
        <div className = 'main-content'>
        <h1> {heroBio.name}</h1>
        <img src ={`${heroBio.thumbnail.path}.jpg`} />
        <p> {heroBio.description} </p>
        </div>
    )
}

export default MainContent
