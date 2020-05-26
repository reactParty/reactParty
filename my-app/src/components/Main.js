import React from 'react';
import Logo1 from './layout/Drinks.png'; 
import Logo2 from './layout/Music.png';

function Main () {
    return (
        <main style={mainStyle}>
            <img src={Logo1} alt="Logo" style={logoStyle1}/>
            <img src={Logo2} alt="Logo" style={logoStyle2}/>                  
        </main>
    )
}

const mainStyle = {
    height: "500px",
    backgroundColor: "#fee"
}

const logoStyle1 ={
    height: "300px",
}

const logoStyle2 ={
    height: "300px",
}

export default Main;