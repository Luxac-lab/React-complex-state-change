import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  function updateContact(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setContact((prevValue) => {
      if (inputName === "firstName") {
        return {
          firstName: newValue,
          lastName: prevValue.lastName,
          email: prevValue.email
        };
      } else if (inputName === "lastName") {
        return {
          firstName: prevValue.firstName,
          lastName: newValue,
          email: prevValue.email
        };
      } else if (inputName === "email") {
        return {
          firstName: prevValue.firstName,
          lastName: prevValue.lastName,
          email: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <div className="login-box">
        <h2>
          Hi! {contact.firstName} {contact.lastName}
        </h2>
        <h2>{contact.email}</h2>
        <form>
          <div className="user-box">
            <input
              onChange={updateContact}
              type="text"
              name="firstName"
              value={contact.firstName}
            />
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input
              onChange={updateContact}
              type="text"
              name="lastName"
              value={contact.lastName}
            />
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input
              onChange={updateContact}
              type="email"
              name="email"
              value={contact.email}
            />
            <label>Email</label>

            <Button />
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
