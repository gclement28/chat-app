import React from 'react';
import './Style.css';


const name= "Ben Georges";
const avatar = "https://randomuser.me/api/portraits/men/66.jpg"
const online = true;

function Contact(){
    
    return(
    
    <div className="Contact">
    <img className = "Avatar" src={avatar}></img>
    <p>
    <h4>{name}</h4>
    {online?" online" : "offline"}
    </p>
    

    </div>
    )
    

        
    
}

export default Contact