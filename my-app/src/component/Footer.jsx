
import React from 'react'
import Logo1 from "../Image/Logo1.png";
import Group from "../Image/Group.png";

function Footer() {
  return (
 
    <>
    
    <div className="logos">
                <img  src={Logo1} alt="Hero Image" />
              </div>


    <div className="groups">
        <span>Home</span>
        <span>Blog</span>
        <span>About</span>
        <span>Contact</span>
    </div>

    <div className="social">

    <img src={Group} alt="Hero Image" />

    </div>

    <center>
      <p>Copyright Ideapeel Inc © 2023. All Right Reserved

</p>
    </center>


    </>


  )
}

export default Footer