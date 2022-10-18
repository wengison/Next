import React, {useState,useEffect} from 'react'
import { WiDayFog, WiHumidity } from "react-icons/wi"
import { GiSunset, GiSunrise, GiWindsock, GiRaining } from "react-icons/gi"
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa"
// GiSunset, GiSunrise, GiWindsock, GiRaining
//FaTemperatureHigh, FaTemperatureLow

const Maintempsection = () => {

    const mySection2: React.CSSProperties = {
        width: "100%",
        height: "35vh",
        minHeight: "250px",
        display: "flex",
        flexGrow: "3",
        paddingInline: "15vw",
        border: "solid orange 3px",
        background: "whitesmoke",
        color: "black"
    }

    const lArticle: React.CSSProperties = {
        width : "100%",
        // height: "35vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const weatherIcon: React.CSSProperties = {
        width: "100%",
        height: "100%",
        // border: "solid orange 1px ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15em"
    }
    const weatherCels: React.CSSProperties = {
        width: "100%",
        // border: "solid orange 1px ",
        fontSize: "7em"
    }

    const rArticle: React.CSSProperties = {
        width : "100%",
    }

    // ---------------------------------------------------------------------------------------
    const [city, setCity] = useState('');

    const Prague = {
    lat: '50.073658',
    lon: '14.418540',
    city: 'Prague'
    }

    const Pardubice = {
        city: 'Pardubice'
    }
    
    
    const myApi = 'b41bbbf4923a2d8d44fb03e8a0075bf9'
    const okurl = `https://api.openweathermap.org/data/2.5/weather?q=${Prague.city}&units=metric&APPID=${myApi}`

    let lat = 50.073658;
    let lon = 14.418540;
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${myApi}`

    const [mainTemp, setMainTemp] = useState('.')

    function mycall() {
    fetch(okurl)
        .then(
        (data)=>data.json())
        .then(data=>{
            const temp = Math.round(data.main.temp);
            setMainTemp(temp);
            console.log(data.main.temp)
        })
    }

    const getDatafor7days = async () => {
        try {
          let res = await fetch(url2);
          let data = await res.json();
        //   console.log("data", data.list[0].weather[0].main);
        for(let i =0; i<40; i++){
            if(i%8==0 || i===0) {
                console.log(i)
                console.log("data:", data.list[i].weather[0].icon);
                console.log(data.list[i])
            }
        }
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        mycall()
        getDatafor7days();
    },[])

    
    const [icon, setIcon] = useState("high")

    const details = {"items": [
        {"name": "High", "value": "23°", "icon": "high"},
        {"name": "Wind", "value": "7mph", "icon": "wind"},
        {"name": "Sunrise", "value": "5:27", "icon": "sunrise"},
        {"name": "Low", "value": "14°", "icon": "low"},
        {"name": "Rain", "value": "0%", "icon": "rain"},
        {"name": "Sunset", "value": "20:57", "icon": "sunset"},
    ]}


    const detailcards = () => {
        const detailarr = [];
        for(let i=0; i<6;i++) {
            detailarr.push(
            <div className="grid-card border-2 border-black rounded-lg p-2 w-full h-full flex" key={i}>
                <section className='left w-3/5 h-full  border-2 grid content-center justify-center'>
                    <h3 className='text-xl'>{details.items[i].name}</h3>
                    <h1 className='text-2xl'>{details.items[i].value}</h1>
                </section>
                <section className='right w-2/5 h-full  border-2 grid justify-center content-center'>
                    {icon ==="high" && <WiHumidity className='text-6xl text-teal-700'/>}
                </section>
            </div>
            )
        }
        return detailarr
    }

  return (
    <section style={mySection2}>
        <article style={lArticle}>
            <div style={weatherIcon}><WiDayFog/></div>
            <div style={weatherCels}>
                <p>{mainTemp}°</p>
                <p className='text-xl'>Mostly sunny</p>
            </div>
        </article>
        <span className='w-1 h-full bg-white'>
        </span> 
        {/* weather details */}
        <article style={rArticle} className='grid grid-cols-3 border-white border-3 gap-4 p-5'>
           {detailcards()}
        </article>
    </section>
  )
}

export default Maintempsection

