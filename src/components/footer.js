import react from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Footer = (props) => {
    const setLibrary = () => {
        axios
      .get("https://glacial-mesa-83865.herokuapp.com/testAPI")
      .then((response) => {
          props.setUserList(response.data)
                      }

                  )
    }
    return(
        <div className= 'footer'>
        {props.email ? <p>logged in as {props.email}, <Link onClick={setLibrary} className = 'button' to='/library'>Personal Library </Link> <Link onClick= {() => {
            props.setEmail(null)
        }} className = 'button' to='/login'>Log out </Link></p>


        : <Link className = 'button' to='/login'>Log in </Link>}

        </div>

    )
}

export default Footer
