
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
        {/* <form
        onSubmit={formSubmit}
        >
          <div className="contact-form">
            <input
              autoComplete="off"
              className="whiteText"
              placeholder="Email"
              type="email"
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
        </form> */}
        <div className="contact-icons">
          <a href="mailto:jacksongrimm18@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="150"
              height="150"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                strokeMiterlimit="10"
                d="M14 4C8.489 4 4 8.489 4 14v22c0 5.511 4.489 10 10 10h22c5.511 0 10-4.489 10-10V14c0-5.511-4.489-10-10-10zm-1 12h24c.18 0 .35.02.51.07l-9.83 9.82a3.801 3.801 0 01-5.37 0l-9.82-9.82c.16-.05.33-.07.51-.07zm-1.93 1.49L18.59 25l-7.52 7.51c-.05-.16-.07-.33-.07-.51V18c0-.18.02-.35.07-.51zm27.86 0c.05.16.07.33.07.51v14c0 .18-.02.35-.07.51L31.4 25zM20 26.41l.89.9a5.782 5.782 0 004.1 1.69c1.49 0 2.97-.56 4.1-1.69l.9-.9 7.52 7.52c-.16.05-.33.07-.51.07H13c-.18 0-.35-.02-.51-.07z"
                fontFamily="none"
                fontSize="none"
                fontWeight="none"
                textAnchor="none"
                transform="scale(5.12)"
              ></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/jackson-grimm-11b2bb255/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="150"
              height="150"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                strokeMiterlimit="10"
                d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z"
                fontFamily="none"
                fontSize="none"
                fontWeight="none"
                textAnchor="none"
                transform="scale(5.12)"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/JacksonGrimm" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="150"
              height="150"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                strokeMiterlimit="10"
                d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 01-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0115.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z"
                fontFamily="none"
                fontSize="none"
                fontWeight="none"
                textAnchor="none"
                transform="scale(8.53333)"
              ></path>
            </svg>
          </a>
        </div>
       < WaveTwo />
      </div> 
    )
}

export default ContactSection 