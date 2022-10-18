import React, {useState,useEffect} from 'react'
import { WiDayFog, WiHumidity } from "react-icons/wi"
import { GiSunset, GiSunrise, GiWindsock, GiRaining } from "react-icons/gi"
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa"
import {BsCloudRain} from "react-icons/bs"
import { sensitiveHeaders } from 'http2'
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
        // border: "solid orange 3px",
        // background: "whitesmoke",
        // color: "black"
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
    const okurl = `https://api.openweathermap.org/data/2.5/weather?q=${Pardubice.city}&units=metric&APPID=${myApi}`

    let lat = 50.073658;
    let lon = 14.418540;
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${myApi}`

    const [mainTemp, setMainTemp] = useState('');
    const [high, setHigh] = useState("");
    const [low, setLow] = useState("");
    const [wind, setWind] = useState("");
    const [rain, setRain] = useState(false);
    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");

    let unix = 1507473344;
    let date = new Date(unix*1000);
    console.log(date.getHours()+":"+date.getMinutes())

    const [day1, day2, day3, day4, day5] = [[], [], [], [], []]

    function mycall() {
        fetch(okurl)
            .then(
            (data)=>data.json())
            .then(data=>{
                const temp = Math.round(data.main.temp);
                setMainTemp(temp);
                setWind(Math.round((data.wind.speed)*3.6)+"km/h");
                console.log("Temp: "+data.main.temp)
                console.log("Speed: "+(data.wind.speed)*3.6+"km/h")

                const sunrise0 = new Date(data.sys.sunrise*1000);
                const sunset0 = new Date(data.sys.sunset*1000);
                let sunrise = sunrise0.getHours()+":"+sunrise0.getMinutes();
                let sunset = sunset0.getHours()+":"+sunset0.getMinutes();
                sunset0.getMinutes() === 0 ? sunset+="0" : null
                // console.log("Sunrise: "+sunrise)
                // console.log("Sunset: "+sunset)
                setSunrise(sunrise)
                setSunset(sunset)
                console.log(data.weather[0].main);
                (data.weather[0].main==="Rain") ? setRain(true) : null
            })
    }

    // const x3hours = [0,3,6,9,12,15,18,21,24]
    // const hourNow = new Date().getHours() ;
    // // const hourNow = 11.2;

    // const hourspast = x3hours.filter(i=>i<hourNow)
    // const tomidnight = (x3hours.length - hourspast.length)-1; // 0 nebo -1
    
    // console.log(x3hours.length - hourspast.length)

    

    const getDatafor5days = async () => {
        try {
          let res = await fetch(url2);
          let data = await res.json();
                //("data", data.list[0].weather[0].main); //data.list[i].main.temp
            const mainArr = [[],[],[],[],[]]
            const x3hours = [0,3,6,9,12,15,18,21,24]
            const hourNow = new Date().getHours() ;
            const hourspast = x3hours.filter(i=>i<hourNow)
            const tomidnight = (x3hours.length - hourspast.length)-1; // 0 nebo -1
            console.log(tomidnight)
            let counter = 0;
            let arrNum = 0;

            const pushToArr = (x:Number, y:Number):void => {
                if(counter<8) {
                    counter+=1;
                    mainArr[y].push(data.list[x])
                } else {
                    counter = 0;
                    arrNum+=1;
                }
            }

            for(let i =tomidnight; i<40; i++){
                pushToArr(i,arrNum)
            }
            const [avg1, avg2, avg3, avg4, avg5] = [[],[],[],[],[]]
            mainArr.forEach(arr=>{
                console.log(mainArr.indexOf(arr)+":---------------------------------------------")
                for(let i=0; i<arr.length;i++) {
                    // console.log(arr[i])
                    console.log(arr[i].main.temp)
                    
                }
                // console.log("-----------------------------------")
            })
            //----------------------
            console.log(mainArr);

        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        mycall()
        getDatafor5days();
    },[])

    
    const [icon, setIcon] = useState("high")

    const details = {"items": [
        {"name": "High", "value": "x°", "icon": "high"},
        {"name": "Wind", "value": wind, "icon": "wind"},
        {"name": "Sunrise", "value": sunrise, "icon": "sunrise"},
        {"name": "Low", "value": "x°", "icon": "low"},
        {"name": "Rain", "value": "0%", "icon": "rain"},
        {"name": "Sunset", "value": sunset, "icon": "sunset"},
    ]}

    const allIcons = [
        <FaTemperatureHigh className='text-5xl'/>,
        <GiWindsock className='text-5xl'/>,
        <GiSunrise className='text-5xl'/>,
        <FaTemperatureLow className='text-5xl'/>,
        <GiRaining className='text-5xl'/>,
        <GiSunset className='text-5xl'/>
    ]


    const detailcards = () => {
        const detailarr = [];
        for(let i=0; i<6;i++) {
            detailarr.push(
            <div className="grid-card border border-black rounded-lg p-2 w-full h-full flex hover: cursor-pointer" key={i}>
                <section className='left w-3/5 h-full grid content-center justify-center'>
                    <h3 className='text-xl'>{details.items[i].name}</h3>
                    <h1 className='text-2xl'>{details.items[i].value}</h1>
                </section>
                <section className='right w-2/5 h-full grid justify-center content-center'>
                   {allIcons[i]}
                </section>
            </div>
            )
        }
        return detailarr
    }

  return (
    <section style={mySection2}>
        <article style={lArticle}>
            <div style={weatherIcon}>
                {!rain && <WiDayFog/>}
                {rain && <BsCloudRain/>}
            </div>
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

