import React from 'react';
import './Style.css';




function Contact(props){
    
    return(
    
        <div className="Contact">
    <img className="avatar" src={props.Avatar}>
        
    </img>

    <p className ="name">
        {props.Name}
    </p> 

        <div className="status">

            
            
            <div className ={props.Status ? "status-online":"status-offline"}>
                
            

            </div>

        <p>{props.Status ? "online":"offline"}
        </p>
            
        
        </div>
    
    
    </div>
    );
}
    

        
    


export default Contact