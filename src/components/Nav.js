import React from 'react'

export default function Nav() {
    return (
        
            <div class="navbar">
                <nav class="navbar navbar-expand-lg  fixed-top " id="nav1" style={{backgroundColor: "transparent"}}>



            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active ">
                        <button class="nav-link" id="About" style={{ backgroundColor: "transparent", border: "transparent" }} href="#">About Us<span
                            class="sr-only"></span></button>
                    </li>
                    <li class="nav-item active">
                        <button class="nav-link" id="Contact-Us" style={{backgroundColor: "transparent", border: "transparent"}} href="#">Contact<span class="sr-only"></span></button>
                    </li>
                    
                </ul>

            </div>
                </nav>
                </div>
        
       
        
    )
}
