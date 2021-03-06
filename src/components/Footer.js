import React from "react";
import * as quotes from "../quotesConfig";
import { connect } from "react-redux";
import { moveDone } from "../actions";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    //generate a random number and select a text from QUOTES_TEXT module
    let random = Math.floor(Math.random() * (+17 - +0)) + +0;
    const quotesTexts = quotes.QUOTES_TEXTS;
    this.state = { text: quotesTexts[random].text };
  }

  render() {
    //done items are as long as dones list length
    const listLength = this.props.item.dones.length;
    return (
      <div
        className="ui center aligned segment"
        style={{ backgroundColor: "#eeab98" }}
      >
        <div class="ui massive horizontal statistic">
          <div class="value" style={{ color: "#4d4b68" }}>
            {listLength}
          </div>
          <div class="label" style={{ color: "#4d4b68" }}>
            tasks are done so far! Keep Going.
          </div>
        </div>
        <div class="ui center aligned container">
          <i>
            <p style={{ fontSize: "48px" }}>{this.state.text}</p>
          </i>
        </div>
      </div>
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
})(Footer);
