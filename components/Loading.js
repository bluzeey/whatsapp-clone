import React from 'react'
import {Circle} from 'better-react-spinkit'
const Loading = () => {
    return (
        <center style={{display:"grid",placeItems:"center",height:"100vh"}}>
        <div>
            <img src="/logo.png" alt="logo" height={200}
            style={{marginBottom:10}}/>
        </div>
        <Circle color="#3CBC28" size={60} style={{marginTop:0}}/>
        </center>
    )
}

export default Loading
