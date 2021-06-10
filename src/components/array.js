import React from 'react'
import { Link } from 'react-router-dom'
import {  useHistory } from 'react-router-dom'
import Banner from './banner'

export const Homearray = ({setHero}, {hero}) => {
    const history = useHistory('/display')
    const handleSubmit = (e) => {
        e.preventDefault()

        setHero(e.target['name'].value)
        console.log(e.target['name'].value)
        console.log(hero)
        history.push('/display')

    }
    return (
        <>

        <Banner/>
        <form onSubmit = {handleSubmit}>
        <input type = 'text' name='name' id= 'name' placeholder='search for your own'/>
        <input type = 'submit' value = 'search'/>
        </form>
        <h3> or get started with some examples below...</h3>
        <div className = 'array'>
          <div id = 'iron man' className = 'card' style={{backgroundImage: `url("https://fsa.zobj.net/crop.php?r=ODHvEg26qtsIM0emcsdun5vkdjEiHUi98rkUvirliGGS7D-tgZk39Jw8aNP_L9WBfD6MYJZK-ZUZDLj2BJXkED42bGjJu-pQ9iFmVFserYdH1oGeEt3quFIz0ADLM5T6d6nr21Bpi1Sz_rf9")`}} >
          <div className = 'card-content'>
          <h2 className = 'card-title'> Iron Man</h2>
          <p className = 'card-body'> Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man </p>
          <Link onClick={() => {
              setHero('Iron man')}}  to='/display' className = 'button'>learn more </Link>
          </div>
          </div>

          <div id = 'Steve Rogers' className = 'card' style={{backgroundImage: `url("https://cdn.vox-cdn.com/thumbor/jTrePs7SkO9Juhtn4KKAcKQu2xc=/0x0:1777x937/1200x800/filters:focal(943x352:1227x636)/cdn.vox-cdn.com/uploads/chorus_image/image/64023028/MV5BMjcxOTI1NDQ4M15BMl5BanBnXkFtZTgwMDk2Njk5NDM_._V1_SX1777_CR0_0_1777_937_AL_.0.jpg")`}}>
          <div className = 'card-content'>
          <h2 className = 'card-title'>Captain America (SR)</h2>
          <p className = 'card-body'> Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers. </p>
          <Link onClick={() => {
              setHero('Steve Rogers')}} to='/display' className = 'button'>learn more </Link>
          </div>
          </div>


          <div id = 'Thor' className = 'card' style={{backgroundImage: `url("https://img.cinemablend.com/quill/1/d/b/6/9/6/1db6965bc933ccacc2fb93c6ee564359cd6a73c1.jpg")`}}>
          <div className = 'card-content'>
          <h2 className = 'card-title'>Thor</h2>
          <p className = 'card-body'> As the god of thunder, Thor – whether using Mjolnir to help harness his abilities or on his own – can bring forth thunder and lightning to use against his foes. </p>
          <Link onClick={() => {
              setHero('Thor')}} to='/display' className = 'button'>learn more </Link>
          </div>
          </div>


          <div id = 'Hulk' className = 'card' style={{backgroundImage: `url("https://api.time.com/wp-content/uploads/2017/07/hulk_thor_ragnarok.png")`}}>
          <div className = 'card-content'>
          <h2 className = 'card-title'>Hulk </h2>
          <p className = 'card-body'> Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage. </p>
          <Link onClick={() => {
              setHero('Hulk')}} to='/display' className = 'button'>learn more </Link>
          </div>
          </div>



          <div id = "T'challa" className = 'card' style={{backgroundImage: `url("https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanidiplacido%2Ffiles%2F2018%2F01%2FMLD-01496_R-1200x780.jpg")`}}>
          <div className = 'card-content'>
          <h2 className = 'card-title'>Black Panther</h2>
          <p className = 'card-body'> T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther. </p>
          <Link onClick={() => {
              setHero('Black Panther')}} to='/display' className = 'button'>learn more </Link>
          </div>
          </div>



          <div id = 'dr strange' className = 'card' style={{backgroundImage: `url("https://img1.looper.com/img/gallery/benedict-cumberbatch-agreed-to-become-doctor-strange-under-one-condition/l-intro-1618149325.jpg")`}}>
          <div className = 'card-content'>
          <h2 className = 'card-title'>Dr Strange</h2>
          <p className = 'card-body'> Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth’s foremost protector against magical and mystical threats. </p>
          <Link onClick={() => {
              setHero('Stephen Strange')}} to='/display' className = 'button'>learn more </Link>
          </div>
          </div>



          <div id = 'Sam Wilson' className = 'card' style={{backgroundImage: `url("https://sir.wdwnt.com/wdwnt.com/2021/04/Captain-America-1797086.jpg")`}}>
          <div className = 'card-content'>
          <h2 className = 'card-title'>Captain America (SW)</h2>
          <p className = 'card-body'> Sam Wilson, formerly the Falcon, takes on the mantle of Captain America as he teams up with his fellow Avengers </p>
          <Link onClick={() => {
              setHero('Falcon')}}  to='/display' className = 'button'>learn more </Link>
          </div>
          </div>


          <div id = 'Scarlett Witch' className = 'card' style={{backgroundImage: `url("https://artforum.com/uploads/upload.002/id19681/article12_1064x.jpg")`}}>
          <div className = 'card-content'>
          <h2 className = 'card-title'>Scarlett Witch</h2>
          <p className = 'card-body'> Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world. </p>
          <Link onClick={() => {
              setHero('SCARLET WITCH')
          }} to='/display' className = 'button'>learn more </Link>
          </div>
          </div>




          </div>
          </>

    )
}
export default Homearray
