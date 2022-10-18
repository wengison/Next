import React from 'react'
import {RiCloseCircleLine, RiSearchLine} from "react-icons/ri"

const Search = () => {

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

  return (
    <section ref={mainSearch} id='search-section' style={mySearch}>
            <article className="w-1/2 h-1/3 relative" style={searchBox}>
            <RiCloseCircleLine className='absolute top-2 right-3 text-4xl cursor-pointer hover:color-black' onClick={close}/>
            <h1 className="text-2xl font-bold ml-1">
                Find yours!
            </h1>
                <input id='inputId' className='p-4 w-full rounded-xl bg-indigo-900 mt-4' ref={inputElement} type="text" placeholder="Search" onKeyPress={handleKeyPress} onChange={(e)=>setLocation(e.target.value)}/>
            </article>
        </section>
  )
}

export default Search