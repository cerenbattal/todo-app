import React from "react";
import InProgressItem from "./InProgressItem";
import { connect } from "react-redux";
import { moveInProgress } from "../actions";

class InProgressList extends React.Component {
  render() {
    const listItem = this.props.item.inprogresses[0];
    const list = this.props.item.inprogresses;
    return listItem ? (
      <div className="ui middle aligned divided list">
        {list.map((item, index) => (
          <InProgressItem text={item.text} key={index} />
        ))}
      </div>
    ) : (
      "You have nothing in progress state."
    );
  }
}

// redux storedan propsları elde et
const mapStateToProps = (state) => {
  if (state) {
    return {
      item: state,
    };
  }
};

export default connect(mapStateToProps, {
  moveInProgress,
})(InProgressList);
