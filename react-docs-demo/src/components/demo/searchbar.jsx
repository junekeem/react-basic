import React from "react";

export class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" value="search"/>
        <input type="checkbox"/>
        <label>Only show products in stock</label>
      </div>
    );
  }

}