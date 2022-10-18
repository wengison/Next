import React, { useState, useEffect } from 'react'
import {TiWeatherStormy} from "react-icons/ti"
import {BsFillCloudRainHeavyFill, BsCloudyFill} from "react-icons/bs"
import {WiSnow, WiSleet} from "react-icons/wi"
// import {IoSunny, IoPartlySunny} from "react-icons/Io"

//BsFillCloudRainHeavyFill, BsCloudyFill, 
// IoSunny, IoPartlySunny
// WiSnow, WiSleet
const Todays = (props) => {

  const [mytime, setMytime] =  useState(12);

  const todaysBoxLi: React.CSSProperties = {
      
      minWidth: "120px",
      // maxWidth: "150px",
      border: "solid white 1px",
      borderRadius: "8px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
  }

  function hourtimes() {
    const arr = [];
    for (let i=1;i<=24;i++) {
      arr.push(`${i}:00`)
    }
    return arr
  }

  // useEffect(()=>{
  //   console.log(hourtimes())
  // },[mytime])

  // const hourtimes = ['1:00', '2:00', '3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00',]
  
  const forecastIcons = [
    <BsFillCloudRainHeavyFill/>, <BsCloudyFill/>, <WiSnow/>, <WiSleet/>, <TiWeatherStormy/>
  ]

  return (
    <li style={todaysBoxLi}>
        <p>{props.time}</p>
        <div><TiWeatherStormy className='text-3xl'/></div>
        <p>13;C;</p>
    </li>
  )
}

export default Todays