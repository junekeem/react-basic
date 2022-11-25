import React from "react";

export class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <th>
        {this.props.category}
      </th>
    );
  }

}