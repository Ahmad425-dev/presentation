import React from 'react'
import "./intro.css"
import {Link} from "react-scroll"

const Intro = () => {
  return (
   <section id="intro">
   <div className="introcontent">
       <span className="hello">Hello</span>
    <span className= "introtxt">I Am <span className="introname">AHMAD</span><br/>
    Website Developer <p className="pp">i am a skilled web developer with experience in creating visually appealing and user friendly websites.</p> 
   <Link><button className="btn">Hire Me</button></Link>
    </span>

    </div>
    
    </section>
  )
}

export default Intro
