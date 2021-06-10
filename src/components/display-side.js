import react from 'react'

export const Sidebar = ({comicData}) => {

    // console.log(comicData)
    return (<div className = 'sidebar'>
    <h3> Comics List</h3>
    {    comicData.map((comics) => {
            return (
                <p> {comics.name} </p>
            )
        })



    }</div>)
}

export default Sidebar
