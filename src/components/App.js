import React from "react";
import ToDoList from "./ToDoList";
import backImage from "../images/pexels-photo-733857.jpeg";

const jumbotronStyle = {
  padding: "40px",
  background: `url(${backImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const App = () => {
  return (
    <div className="pusher">
      <div
        className="ui vertical masthead center aligned segment"
        style={jumbotronStyle}
      >
        <div
          className="ui text container"
          style={{ textShadow: "3px 3px 3px rgba(113, 123, 126, 0.4)" }}
        >
          <h1 class="ui header">To Do List</h1>
          <h2>Push yourself and keep going!</h2>
        </div>
      </div>
      <div className="ui vertical stripe segment">
        <div className="ui text container">
          <h2>What are you going to do today?</h2>
        </div>
        <div style={{ padding: "40px" }}>
          <ToDoList />
        </div>
      </div>
    </div>
  );
};

export default App;
