import React from 'react'

const UserLogin = () => {

    const myStyle:React.CSSProperties = {
        position: "relative",
        margin: "auto",
        marginTop: "20vh",
        width: "30vw",
        minWidth: "500px",
        minHeight: "300px",
        height: "50vh",
        border: "solid white 2px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    const myH1:React.CSSProperties = {
        position: "absolute",
        top: "10px"
    }

    const mySection:React.CSSProperties = {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "5px",
    }

    const myInput:React.CSSProperties = {
        padding: "5px"
    }

    const mySubmit:React.CSSProperties = {
        width: "49%",
        marginTop: "15px",
        padding: "5px",
        border: "solid white 1px",
        borderRadius: "4px",
        cursor: "pointer"
    }

  return (
    <>
        <div style={myStyle}>
            <h1 style={myH1}>Log in</h1>
            <section style={mySection}>
                <label>Username</label>
                <input style={myInput} id='iusername' type="text"  placeholder='Username'/>
            </section>
            <section style={mySection}>
                <label>Password</label>
                <input style={myInput} id='ipassword' type="password"  placeholder='Password'/>
            </section>
            <button style={mySubmit}>Send</button>
        </div>
    </>
  )
}

export default UserLogin