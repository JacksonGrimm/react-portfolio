
import React, { useState } from 'react';
import WaveTwo from "./wave-2"

const ContactSection = function(){
    const [formInfo, setFormInfo] = useState({
        email: "",
        name: "",
        message: ""
    })
    const formSubmit = (event) => {
        event.preventDefault();
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formInfo.email))){
            alert("please enter a valid email")
        }
    }
    return (
        <div>
        <h1>Contact</h1>
        <form
        onSubmit={formSubmit}
        >
          <div className="contact-form">
            <input
              autoComplete="off"
              className="whiteText"
              placeholder="Email"
              type="text"
              onChange={(event) => { setFormInfo({email: event.target.value})}}
            ></input>
            <input
              autoComplete="off"
              className="whiteText"
              placeholder="Name"
              type="text"
              onChange={(event) => { setFormInfo({name: event.target.value})}}
            ></input>
            <input
              autoComplete="off"
              className="whiteText"
              placeholder="Message"
              type="text"
              onChange={(event) => { setFormInfo({message: event.target.value})}}
            ></input>
          </div>
          <button>Submit</button>
        </form>
       < WaveTwo />
      </div> 
    )
}

export default ContactSection 