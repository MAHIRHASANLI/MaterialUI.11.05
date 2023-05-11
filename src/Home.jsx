import React from 'react'
import { Button } from '@mui/material';
const styleLorem={
    fontFamily:[ "Roboto","Helvetica","Arial","sansSerif"],
    fontWeight: "400",
    fontSize: "1.5rem",
    lineHeight: "1.334",
    letterSpacing: "0em",
    textAlign: "center",
    marginBottom: "50px",
    color: "rgba(0, 0, 0, 0.6)",
}
const styleH1={
    fontFamily:[ "Roboto","Helvetica","Arial","sansSerif"],
"font-weight": "300",
"font-size": "3.75rem",
"line-height": "1.2",
"letter-spacing": "-0.00833em",
"text-align":" center",
"margin-top": "60px",
"margin-bottom": "0.35em",
"color": "rgba(0, 0, 0, 0.87)"
}
const Home = () => {
  return (
    <div style={{width:"50%",textAlign:"center", marginInline:["auto"]}}>
        <h1 style={styleH1}>Album layout</h1>
        <p style={styleLorem}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <Button style={{marginRight:"10px"}} variant="contained"  color={"primary"}>MAIN CALL TO ACTION</Button>
        <Button variant="outlined" color={"primary"}>SECONDARY ACTION</Button>
        </div>
  )
}

export default Home