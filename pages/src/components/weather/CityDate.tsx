import React,{useState, useEffect, useDebugValue} from 'react'
import {RiCloseCircleLine, RiSearchLine} from "react-icons/ri"

const CityDate = (props:any) => {

    const open = (): void => {
        if(props.value.closed) {
            props.value.setClosed(false)
            const search = document.querySelector("#search-section");
            search.style.display = 'flex'   
            props.value.setLocation('')
            console.log('I"m opening search')
        }
    }

    // section 1
    const mySection1: React.CSSProperties = {
        width: "100%",
        height: "15vh",
        padding: " 10vh 5vh",
        paddingInline: "15vw",
        minHeight: "170px",
        // border: "solid red 2px"
    }
    const weekDays =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const [date, setDate] = useState('');
    const [day, setDay] = [props.value.dayN, props.value.setDayN]
    const [weekday, setWeekday] = useState('');
    const [month, setMonth] = useState('');

    useEffect(()=> {
        // console.log(props.value.day, props.value.setDay)
        const getactualdate = new Date();
        // setDate(getactualdate);
        setDay(getactualdate.getDate());
        setWeekday(getactualdate.getDay());
        setMonth(getactualdate.getMonth());
    },[])

    const displayMonth = () => {
        return allMonths[month]
    }

    const displayWeekDay = () => {
        // console.log(weekDays[weekday-1])
        return weekDays[weekday-1]
    }

    useEffect(()=> {
    }, [props.value.fixLocation])


    const actualDay = () => {
        let dayNum: number = (new Date().getDay());
        (dayNum!==0) ? dayNum-=1 : dayNum=6;
        return weekDays[dayNum]
    }


  return (
    <section style={mySection1}>
        <div onClick={open} className='quick-serch absolute top-8 right-10 flex p-4 border border-solid hover:border-dotted border-white rounded-xl cursor-pointer'><RiSearchLine className='cursor-pointer text-4xl mr-4'/><h2 className='text-2xl'>Search</h2></div>
        <h2 className='text-4xl'>{props.value.fixLocation}</h2>
        <h5 className='text-xl'>{actualDay()} {day} {displayMonth()}</h5>
    </section>
  )
}


export default CityDate