import React from "react";
import ToDoItem from "./ToDoItem";
import { connect } from "react-redux";
import { addTodo, deleteToDo } from "../../actions";

//list all the to do items
class ToDoList extends React.Component {
  render() {
    const listItem = this.props.item.todos[0];
    const list = this.props.item.todos;
    return listItem ? (
      <div className="ui middle aligned divided list">
        {list.map((item, index) => (
          <ToDoItem text={item.text} id={index} />
        ))}
      </div>
    ) : (
      "You have nothing to do. Yay!"
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

// componenti reduxa bağla
export default connect(mapStateToProps, {
  addTodo,
  deleteToDo,
})(ToDoList);
