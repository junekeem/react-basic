import React from "react";
import { Searchbar } from "./searchbar";
import { ProductTable } from "./product-table";

export class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false
    }
  }

  render() {
    return (
      <>
        <Searchbar filterText={this.state.filterText} isStockOnly={this.state.isStockOnly}/>
        <ProductTable products={this.props.products} filterText={this.state.filterText} isStockOnly={this.state.isStockOnly}/>
      </>
    );
  }
}
