import React from 'react'
import "./contact.css";

const Contact=()=> {
  return (
    <div id="contact">
      <h2 className="contxt">Contact Me </h2>
      <span className=" title">please fill out the form below to discuss any work</span>
    <form className="contact_form">
<input type="text" placeholder="your name" className="name"></input>
<input type="email" placeholder="your Email" className="name"></input>
<textarea className="msg" name="message" row="5" placeholder="enter your mesage here" ></textarea>
<button className="btn" type="submit" value="send">Submit</button> 
    </form>
    </div>
  )
}

export default Contact
