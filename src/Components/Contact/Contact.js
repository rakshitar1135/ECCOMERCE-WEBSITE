import React, { Fragment, useRef } from "react";
import classes from './contact.module.css'
const Contact = (props) => {
    const usernameRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
    async function submitHandler (event) {
        event.preventDefault();
        const contact = {
            name: usernameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        }
        console.log(contact)

        const response = await fetch( "https://helical-land-343114-default-rtdb.firebaseio.com/",
            {
              method: "POST",
              body: JSON.stringify(contact),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log(data);

    }

  return (
    <Fragment>
      <h1>Appointment Booking App</h1>
      <form onSubmit={submitHandler}>
        <label className={classes.input}> Name</label>
        <input id="username" type="text" name="username" ref={usernameRef} required />
        <label> EmailId</label>
        <input id="email" type="email" name="emailId" ref={emailRef} required />
        <label> Phone Number</label>
        <input id="phonenumber" type="tel" name="phonenumber" ref={phoneRef}/>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Contact;