import React from "react";
import AddToDo from "./AddToDo";

class Header extends React.Component {
  render() {
    return (
      <div className="ui text container" style={{ padding: "1.5em" }}>
        <h2>What are you going to do today?</h2>
        <AddToDo />
      </div>
    );
  }
}

export default Header;
