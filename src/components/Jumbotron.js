import React from "react";
import backImage from "../images/pexels-photo-733857.jpeg";

const jumbotronStyle = {
  padding: "40px",
  background: `url(${backImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

class Jumbotron extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Jumbotron;
