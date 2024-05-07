import React from "react";
import '../index.css'


function Userinfo({props}) {
  console.log(props)
    return (
    <div className="details-container">
        <h5>Logged in as {props.family_name}</h5>
        <h5>Name : <span>{props.given_name}</span></h5>
        <h5>Email : <span>{props.email}</span></h5>
    </div>
    )
  }
  
  export default Userinfo