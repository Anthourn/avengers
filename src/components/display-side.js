import react from 'react'
import React, {useState} from 'react'
import axios from 'axios'
export const Sidebar = (props) => {


    // const data = (e) => {
    //     await docRef.add({
    //         name:e.target.innerText
    //     })
    // }

    // const data = (e) => {
    //     docref('users').add(
    //         {name:e.target.innerText,
    //         createdby:props.email
    //         }
    //     )
    // }

    const data = (e) => {
        axios.post('https://glacial-mesa-83865.herokuapp.com/testAPI',
        { createdBy: props.email,
            library:[e.target.innerText]
        }
    ).then((response) => {
            console.log(response.data)
        })
    }
    // console.log(comicData)
    return (
        <div className = 'sidebar'>
    <h3> Comics List</h3>
        (Click to add to your library)

    {    props.comicData.map((comics) => {
            return (
                <p onClick={props.email ? data : ''} className = {props.email ? 'comics-log' : 'comics'}> {comics.name}


                 </p>

            )
        })



    }</div>)
}

export default Sidebar
