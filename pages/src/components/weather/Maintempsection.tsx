import React, {useState,useEffect} from 'react'
import { WiDayFog, WiHumidity } from "react-icons/wi"

const Maintempsection = (props) => {

    // section 2
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

    // lArticle
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

    // rArticle
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
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myApi}`

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

    // function myCall2() {
    //     const dataArr: any = [];
    //     fetch(url2)
    //     .then((data)=> data.json())
    //     .then(data=>console.log(data.list[0][3][1].main))
    //     // .then(data=>{
    //     //     for (let i=0; i<5; i++) {
    //     //        dataArr.push(data[i]);
    //     //     }
    //     // })
    //     console.log(dataArr);
    // }

    const getDatafor7days = async () => {
        try {
          let res = await fetch(url2);
          let data = await res.json();
        //   console.log("data", data.list[0].weather[0].main);
        for(let i =0; i<7; i++){
            console.log("data:", data.list[i].weather[0].icon);
        }
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        mycall()
        // myCall2()
        getDatafor7days();
    },[])

    

    const details = [];

    const detailsPush = () => {
        return (
            <section className='left w-3/5 h-full  border-2 grid content-center justify-center'>
                <h3 className='text-xl'>{details[x].name}</h3>
                <h1 className='text-2xl'>{details[x].value}</h1>
            </section>
        )
    }


    const detailcards = () => {
        const detailarr = [];
        for(let i=0; i<6;i++) {
            detailarr.push(
            <div className="grid-card border-2 border-black rounded-lg p-2 w-full h-full flex" key={i}>
                {/* {detailscardsinner()} */}
                <section className='right w-2/5 h-full  border-2 grid justify-center content-center'>
                    <WiHumidity className='text-6xl text-teal-700'/>
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

