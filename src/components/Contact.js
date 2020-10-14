import React from "react";
import "./Style.css";

class Contact extends React.Component{
    constructor(props){
        super(props);
            this.state={
            online:false,
            };
    }
  render(){
      return(
    <div className="Contact">
      <img className="avatar" src={this.props.Avatar}></img>

      <div className="status">
        <div className="name">{this.props.Name} </div>

        <p className="status-text"
        onClick={event => {
                const onlineReverse = !this.state.online;
                this.setState({ online: onlineReverse });}}>
          {this.state.online ? 'status-online' : 'status-offline'}
          
          
        </p>
      </div>
    </div>
  );
}
}

export default Contact;
