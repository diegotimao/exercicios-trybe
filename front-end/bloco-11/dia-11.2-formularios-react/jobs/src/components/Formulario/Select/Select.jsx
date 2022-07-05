import React from "react";

class Select extends React.Component {
  render() {
    return (
      <div className="seletc">
        <div className="item">
          <label htmlFor="">Moradia</label>
          <input type="chekbox" name='casa' value={this.state.moradia} onChange={this.handleChange}/>
          <input type="chekbox" name='apartamento' value={this.state.moradia} onChange={this.handleChange}/>
        </div>
        <div className="item">
          <label htmlFor="">Estado</label>
          <select name="" id="">
            <option value="">Bahia</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Select;