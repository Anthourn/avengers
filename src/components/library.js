import react from 'react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Library = (props) => {


    const deleteComic = (e) => {
        axios
      .delete(
        "https://glacial-mesa-83865.herokuapp.com/testAPI/" +
          e.target.id
      )
      .then((response) => {
      });
    }
    return(<>
        <h1> {props.email}'s Library</h1>
        <ul>
        {

            props.userList.map((list) => {
                if(list.createdBy===props.email)
                return (
                    <li id={list._id}> {list.library[0]} <button id = {list._id} onClick={deleteComic}> - </button> </li>
                )
            })

        }
        </ul>
        <Link className = 'button' to='/'>Back </Link>
        </>
    )
}

export default Library
