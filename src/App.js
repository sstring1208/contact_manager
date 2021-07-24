import "./App.css";
import React, { useState } from "react";
import ContactList from "./ContactList";



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState();

  const [contactlist, setContactlist] = useState([]);

  // console.log(name);
  // console.log(email);
  // console.log(mobNo);

  function addContact(e) {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      mobNo: mobNo,
    };
    setContactlist([...contactlist,contact]);
    setName('');
    setEmail('');
    setMobNo('');

  }

  console.log(contactlist);

  return (
    <div className="App">
      <h1>Contact Management App</h1>

      <form>
        <label>Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value); 
          }} value={name}
        />
        <label>Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />

        <label>Mob No</label>
        <input
          onChange={(e) => {
            setMobNo(e.target.value);
          }}
          value={mobNo}
        />
        <button disabled={!name || !mobNo} type="submit" onClick={addContact}>
          Add Contact
        </button>
      </form>

         <ContactList
         contactlist={contactlist}/>
      
    </div>
  );
}

export default App;
