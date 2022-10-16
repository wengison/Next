import React, {useEffect} from 'react'
import Todays from './Todays'

const Forecast = (props:any) => {

    // section 3
    const mySection3: React.CSSProperties = {
        width: "100%",
        height: "49vh",
        border: "solid red 1px"
    }

    const centerBox: React.CSSProperties = {
        margin: "auto",
        width: "60%",
        height: "100%",
        border: "solid green 2px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }

    const todaysWeather: React.CSSProperties = {

    }

    const todaysBox: React.CSSProperties = {
        
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: "25px",
        listStyle: "none",
        border: "solid green 1px"

    }

    // const todaysBoxLi: React.CSSProperties = {
        
    //     minWidth: "100px",
    //     // border: "solid white 1px",
    //     padding: "20px",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     border: "solid red 1px"
    // }

    const weekDays =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekday = weekDays[(new Date().getDay())];
    

    // useEffect(()=>{
    //     console.log(`Next days for forecast: ${weekDays[(new Date().getDay())]}`)
    // },[])


    const renderToday = () => {
        const n = [];
        const nextdays: any = [];
        let touch = false;
        weekDays.forEach(day=>{
            if(day===weekday) touch = true;
            if(touch) {
                nextdays.push(day)
            }
        });
        touch= false;
        weekDays.forEach(day=>{
            if(day===weekday) touch = true;
            if(!touch) nextdays.push(day)
        })
        // nextdays.push(weekday);
        for (let i=0; i<7;i++) {
            n.push(<Todays time={nextdays[i]} key={i}/>)
        }
        console.log(`This is nextdays: ${nextdays}`)
        return n
    }

  return (
    <section style={mySection3}>
        <article style={centerBox}>
            <h6 className='flex justify-center p-2 border border-orange-600 border-3' style={todaysWeather}>Todays weather</h6>
            <ul style={todaysBox}>
                {renderToday()}
            </ul>
        </article>
    </section>
  )
}

export default Forecast