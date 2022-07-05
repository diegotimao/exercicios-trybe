import React from "react";

import './textarea.css';

class TextArea extends React.Component {
  render() {
    const { description, name, value, handleChange } = this.props;

    return (
      <div className="item">
        <label htmlFor="sobre">{description}</label>
        <textarea id="" cols="30" rows="8" name={name}  value={value} onChange={handleChange} />
      </div>
    )
  }
}

export default TextArea;