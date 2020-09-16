import React from "react";
import DoneItem from "./DoneItem";
import { connect } from "react-redux";
import { moveDone } from "../actions";

class DoneList extends React.Component {
  render() {
    const listItem = this.props.item.dones[0];
    const list = this.props.item.dones;
    return listItem ? (
      <div className="ui middle aligned divided list">
        {list.map((item, index) => (
          <DoneItem text={item.text} key={index} />
        ))}
      </div>
    ) : (
      "You have not done any tasks"
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
  moveDone,
})(DoneList);
