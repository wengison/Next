import React, {useState, useEffect, useRef} from 'react'   
import '@fortawesome/fontawesome-svg-core/styles.css'
import {RiCloseCircleLine, RiSearchLine} from "react-icons/ri"
import CityDate from './src/components/weather/CityDate'
import Todays from './src/components/weather/Todays'
import Maintempsection from './src/components/weather/Maintempsection'
import Forecast from './src/components/weather/Forecast'


const weather = () => {

    // mySearch
    const mySearch: React.CSSProperties = {
        width: "100%",
        height: "100%",
        position: "absolute",
        background: "rgba(9,9,10,.97)",
        display: "none",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center"
    }

    const searchBox: React.CSSProperties = {
        display: "flex",
        background: " #002242",
        marginTop: "15vh",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6vh", 
        border: "solid 1px white",
        borderRadius: "10px",
        color: "white"
    }
    
    //vengIsCoding

    // ---------------------------------------------------------------------------------------


    const [closed, setClosed] = useState(true);
    const [location, setLocation] = useState('');
    const [fixLocation, setFixLocation] = (useState('Prague, Czech Republic'));


    // const myInput = useRef()
    // myInput.focus()

    const mainSearch = useRef<HTMLTableSectionElement>(null);

    const close = (): void => {
        if(!closed) {
            setClosed(true);
            // setLocation("");
            
            const search = document.querySelector("#search-section");
            search.style.display = 'none'   
        }
    }

   

    const handleKeyPress = (event: any) => {
        if(event.key === 'Enter'){
            setFixLocation(location);
            close();
            // console.log(location)
        }
      }

    const renderToday = () => {
        const n = [];
        for (let i=0; i<8;i++) {
            n.push(<Todays/>)
        }
        return n
    }

    const inputElement = useRef(null);

    

    useEffect(() => {
        if (inputElement.current) {
        inputElement.current.focus();  //pote jeste vypnout
        }
    }, [closed]);

    // useEffect(()=> {
    //     console.log("b")
    // }, [fixLocation])

    useEffect(()=>{
        if (location==='') {
            document.querySelector('#inputId').value = ''
        }
    },[location])

    const [dayN, setDayN] = useState('')

   

     
  return (
    <>
        <section ref={mainSearch} id='search-section' style={mySearch}>
            <article className="w-1/2 h-1/3 relative" style={searchBox}>
            <RiCloseCircleLine className='absolute top-2 right-3 text-4xl cursor-pointer hover:color-black' onClick={close}/>
            <h1 className="text-2xl font-bold ml-1">
                Find yours!
            </h1>
                <input id='inputId' className='p-4 w-full rounded-xl bg-indigo-900 mt-4' ref={inputElement} type="text" placeholder="Search" onKeyPress={handleKeyPress} onChange={(e)=>setLocation(e.target.value)}/>
            </article>
        </section>

        <CityDate value={{fixLocation, setFixLocation, setLocation, closed, setClosed, dayN, setDayN}}/>
        <Maintempsection/>
        <Forecast value={{dayN, setDayN}}/>
    </>
  )
}

export default weather