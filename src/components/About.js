import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="about-us">
            <img className="about"  src="./images/band1.jpg"></img>


            <div className="overlay-logo">
            <Link to="/" target="_blank"><img className="logo1" height="200px" src="./images/logo.png"></img></Link>
            
            </div>
            <div class="navbar">
                <nav class="navbar navbar-expand-lg  fixed-top " id="nav1" style={{ backgroundColor: "transparent", margin: "0" }}>




                    <div class="collapse navbar-collapse " id="navbarSupportedContent" style={{ backgroundColor: "transparent" }}>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <button class="nav-link" id="listen" style={{ backgroundColor: "transparent", borderColor: "transparent" }} href="#"><Link style={{ color: "black" }} to="/">Home</Link></button>
                            </li>
                            <li class="nav-item active">
                                <button class="nav-link" id="shop" style={{ backgroundColor: "transparent", borderColor: "transparent" }} href="#"><Link style={{ color: "black" }}
                                    to="contact">Contact</Link></button>
                            </li>
                            <li class="nav-item active">
                                <button class="nav-link" id="shop" style={{ backgroundColor: "transparent", borderColor: "transparent" }} href="#"><Link to="/instagram" target="_blank"><img height="30px" src="./images/insta.png"></img></Link></button>
                            </li>
                            <li class="nav-item active">
                                <button class="nav-link" id="shop" style={{ backgroundColor: "transparent", borderColor: "transparent" }} href="#"><Link to="/spotify" target="_blank"><img height="30px" src="./images/spotify.png"></img></Link></button>
                            </li>
                            <li class="nav-item active">
                                <button class="nav-link" id="shop" style={{ backgroundColor: "transparent", borderColor: "transparent" }} href="#"><Link to="/youtube" target="_blank"><img height="30px" src="./images/youtube.png"></img></Link></button>
                            </li>
                        </ul>


                    </div>
                </nav>


            </div>
            
            <div style={{paddingRight:"700px", paddingBottom:"20px"}}className="overlay">
                
            <p > <h2>About Us</h2> Inspired by a misheard lyric, friends Sebastian Quintero,<br></br> Destin Johnson, Ryan Denis, and Christian Carcamo <br></br>assumed the moniker Dead At Twenty Two, now <br></br>abbreviated da22. As stated in the short film, the name <br></br>does not implya cry for help, but rather is an exploration <br></br>of existentialism in modern youth.<br></br> <br></br>

Formed in 2020, the American alternative act makes <br></br>its debut with “callingallcars”; a look into different <br></br>perspectives and misinterpreted situations.
</p>
</div>
        </div>
    )
}
