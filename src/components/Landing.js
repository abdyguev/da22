import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div>

            <video autoplay="true" loop="true" muted="true">
                <source src="./da22vid.mp4" type="video/mp4"></source>


            </video>
            <div class="navbar">
                <nav class="navbar navbar-expand-lg  fixed-top " id="nav1" style={{ backgroundColor: "transparent", margin: "0" }}>




                    <div class="collapse navbar-collapse " id="navbarSupportedContent" style={{ backgroundColor: "transparent" }}>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <button class="nav-link" id="listen" style={{ backgroundColor: "transparent", borderColor: "transparent" }} href="#"><Link style={{ color: "black" }} to="/about">About Us</Link></button>
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
            <div class="overlay">
                

                <Link to="/instagram" target="_blank"><img height="300px" src="./images/logo.png" alt="logo" ></img></Link>

            </div>
            <div class="overlay" style={{ paddingTop: "150px" }}>
                <h3>"callingallcars"</h3>

            </div>
            <div class="overlay" style={{ paddingTop: "200px" }}>
                <p style={{ fontSize: "22px" }}>out everywhere</p>

            </div>
            {/* <div class="overlay" style={{paddingTop:"400px"}}>
              <ul>
                      <li>About Us </li>
                      <li>Contact</li>

                  </ul>
         
              </div> */}

            {/* <div class="overlay" style={{ paddingBottom: "600px", paddingLeft: "780px" }}>
                <ul>
                <button style={{backgroundColor:"transparent", borderColor:"transparent", color:'black'}} type="button" className="btn btn-light" ><Link to="/about">About Us</Link></button>
                <button style={{backgroundColor:"transparent", borderColor:"transparent"}} type="button" className="btn btn-light" ><Link to="contact">Contact</Link></button>
                    <li> <Link to="/instagram" target="_blank"><img height="30px" src="./images/insta.png"></img></Link></li>
                    <li><Link to="/spotify" target="_blank"><img height="30px" src="./images/spotify.png"></img></Link></li>
                    <li><Link to="/youtube" target="_blank"><img height="30px" src="./images/youtube.png"></img></Link></li>

                </ul>

            </div> */}



        </div>
    )
}
