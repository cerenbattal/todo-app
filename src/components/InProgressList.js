import React from "react";
import InProgressItem from "./InProgressItem";

class InProgressList extends React.Component {
  render() {
    return (
      <div className="ui middle aligned divided list">
        <InProgressItem />
        <InProgressItem />
        <InProgressItem />
      </div>
    );
  }
}

export default InProgressList;
