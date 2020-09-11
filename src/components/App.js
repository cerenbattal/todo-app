import React from "react";
import ToDoList from "./ToDoList";
import backImage from "../images/pexels-photo-733857.jpeg";
import * as quotes from "../quotesConfig";

const jumbotronStyle = {
  padding: "40px",
  background: `url(${backImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const App = () => {
  const quotesTexts = quotes.QUOTES_TEXTS;
  console.log(quotesTexts);
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
          <h1 class="ui header" style={{ color: "#4d4b68" }}>
            To Do List
          </h1>
        </div>
      </div>
      <div
        className="ui center aligned vertical segment"
        style={{ padding: "2.5em" }}
      >
        <div className="ui text container" style={{ padding: "1.5em" }}>
          <h2>What are you going to do today?</h2>
        </div>
        <div>
          <ToDoList />
        </div>
      </div>
      <div
        className="ui center aligned segment"
        style={{ backgroundColor: "#eeab98" }}
      >
        <div class="ui massive horizontal statistic">
          <div class="value" style={{ color: "#4d4b68" }}>
            4
          </div>
          <div class="label" style={{ color: "#4d4b68" }}>
            tasks are done today! Keep Going.
          </div>
        </div>
        <div class="ui center aligned container">
          <i>
            <p style={{ fontSize: "48px" }}>{quotesTexts[0].text}</p>
          </i>
        </div>
      </div>
    </div>
  );
};

export default App;
