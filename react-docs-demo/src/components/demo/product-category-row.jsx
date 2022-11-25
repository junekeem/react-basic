import React from "react";

export class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <th>
          {this.props.category}
        </th>
      </tr>
    );
  }

}