import React from 'react';
import './Style.css';


function Contact(props){
    
    return(
    
    <div className="Contact">      
        <img className="avatar" src={props.Avatar}></img>                   
        <div className="name" >   
            {props.Name}       
        </div>
        <div className="status">
            <p className="status-text">           
                {props.Status ? "online":"offline"}                  
            </p>
            <p className ={props.Status ? "status-online":"status-offline"}>       
            </p> 
        </div>
    </div>

    )};


    

        
    


export default Contact;