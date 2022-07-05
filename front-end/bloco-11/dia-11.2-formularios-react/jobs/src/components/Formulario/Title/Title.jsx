import React from "react";

import './title.css';

class Title extends React.Component {
  render() {
    const { description } = this.props;
    return (
      <div className='form-title'>
        <h1>{description}</h1>
      </div>
    )
  }
}

export default Title;