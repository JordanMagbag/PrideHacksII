import "./Home.css"
import React from 'react';
import background from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/components/map.png";
import tp from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/images/toilet hack 2.png"

const Home=()=>{
    return(
        <body>
            <img src={background} alt="map" id = "map"></img>
            <div class="navbar">
                <a href="#home"><img src = {tp} alt = "3 Maps Logo" width = "114px" height = "107px" border = "1px solid black" ></img></a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
            </div>
        </body>
    );

};

export default Home;