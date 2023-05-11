const styleFooter={
    "font-family":[ "Roboto","Helvetica","Arial","sans-serif"],
"font-weight": "500",
"font-size": "1.25rem",
"line-height":" 1.6",
"letter-spacing":" 0.0075em",
"text-align": "center",
"margin-bottom":" 0.35em"
}
const stylep1={
    "margin": 0,
    "font-family": ["Roboto","Helvetica","Arial","sans-serif"],
    "font-weight": "400",
    "font-size":" 16px",
    "line-height": "1.75",
    "letter-spacing": "0.00938em",
    "text-align": "center",
    "color": "rgba(0, 0, 0, 0.6)"
}
const stylep2={
    "margin-top": "-5px",
    "margin-bottom": "40px",
    "font-family": ["Roboto","Helvetica","Arial","sans-serif"],
    "font-weight": "400",
    "font-size":" 16px",
    "line-height": "1.75",
    "letter-spacing": "0.00938em",
    "text-align": "center",
    "color": "rgba(0, 0, 0, 0.6)"
}
const Footer = () => {
  return (
    <div style={{width:"350px",marginInline:"auto",textAlign:"center"}}>
        <h2 style={styleFooter}>Footer</h2>
      <p style={stylep1}> Something here to give the footer a purpose!</p>
        <p style={stylep2}>
        Copyright © Your Website 2023.</p>
    </div>
  )
}

export default Footer