import React from "react";
import { ProductCategoryRow } from "./product-category-row";
import { ProductRow } from "./product-row";

export class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    const rows = []
    let lastCategory = null;
    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category}/>
        )
      }
      rows.push(
        <ProductRow product={product}/>
      )
      lastCategory = product.category
    })

    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
