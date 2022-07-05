import React from "react";

import './input.css';

class Input extends React.Component {
  render() {

    const {name, value, type, description, handleChange } = this.props;
    
    return (
      <div className="item">
        <label htmlFor={name}>{description}</label>
        <input type={type} value={value} name={name} onChange={handleChange}/>
      </div>
    )
  }
}
 
export default Input;