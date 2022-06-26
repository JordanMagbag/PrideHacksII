import "./Home.css"
import React from 'react';
import background from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/components/map.png"
import logo from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/images/logo.png"
import inclusive from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/images/inclusive.png"
import disabled from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/images/disabled.png"
import family from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/images/family.png"
import heterosexual from "/Users/samanthatsai/Downloads/PrideHacks/PrideHacksII/pridehacks/Front End/src/images/hetero.png"



const Home=()=>{
    return(
        <body>
            <img src={background} alt="map" id = "map"></img>
            <div class="navbar">
                <button><img class = "opt" src = {logo} alt = "3 Maps Logo" width = "114px" height = "107px" border = "1px black" ></img></button>
                <div id = "options">
                    <button><img img class = "opt" src = {inclusive} alt = "Inclusive" width = "114px" height = "107px" border = "1px black"></img> </button>
                    <button><img img class = "opt" src = {disabled} alt = "Disabled" width = "114px" height = "107px" border = "1px black"></img> </button>
                    <button><img img class = "opt" src = {family} alt = "Family" width = "114px" height = "107px" border = "1px black"></img> </button>
                    <button><img img class = "opt" src = {heterosexual} alt = "Heterosexual" width = "114px" height = "107px" border = "1px black"></img> </button>
                </div>
            </div>

            
        </body>
    );

};

export default Home;

