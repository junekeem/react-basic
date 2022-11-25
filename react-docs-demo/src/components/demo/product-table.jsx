import React from "react";
import { ProductCategoryRow } from "./product-category-row";
import { ProductRow } from "./product-row";

export class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = []
    let lastCategory = null;
    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        console.log(product.name)
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category}/>
        )
      }
      rows.push(
        <ProductRow product={product} key={product.name}/>
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
