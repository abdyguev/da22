import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div>
            <img  width="100%" height="100%" src="./images/contact.jpg"></img>
            <div className="overlay-logo">
            <img height="200px"src="./images/logo.png"></img>
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
                                    to="/about">About Us</Link></button>
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
            <div style={{paddingRight:"800px", paddingBottom:"360px"}}className="overlay">
                <h1>
                    Contact Us
                </h1>
                </div>
                <div style={{paddingTop: "70px", paddingRight:"800px", paddingBottom:"360px"}}className="overlay">

                <p>
                    deadattwentytwo@gmail.com
                </p>

            </div>
        </div>
    )
}
