import React from 'react'
import logo from '../../asset/Ellipse 114@2x.png'
import camera from "../../asset/Group 1585@2x.jpg"
import "./style.css"
import {store} from "../reducer"

export function AccountSetting() {
//   store.subscribe(()=>{
//   console.log("reducer",store.getState());
  
// })
console.log("reducer",store.getState());

  return (
    <div className='accSetting'> 
       <div className='nav'>
        <h1>Account Setting</h1>
       </div>
       <div className='main-container'>
          <div className='image-parts'>
            <img className='img1' src={logo} alt="images" />
            <img className='img2' src={camera} alt="camera" />
          </div>
          <div className='details'>
            <p><strong>{store.getState().name?store.getState().name:"Marry"}</strong></p>
            <p>{store.getState().email?store.getState().email:"Marry@gmail.com"}</p>
          </div>
       </div>
       <div className='para'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime laudantium, quos corporis temporibus eaque, quasi quo inventore eum!</p>
       </div>
    </div>
  )
}

