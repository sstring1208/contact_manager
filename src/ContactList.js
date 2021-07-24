import React from 'react'

function Contactlist(props) {
    return (
        <div className="contactlist">
            <ul>
           {props.contactlist.map(contact=>(
             <li>{contact.name}{contact.email}</li>
           ))}
         </ul>
        </div>
    )
}

export default Contactlist
