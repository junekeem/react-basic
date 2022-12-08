import React from "react";
import { Clock } from "./clock";
import { Table } from "./table";

export class Guestbook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Clock />
        <Table/>
      </>
    );
  }

}