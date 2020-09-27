import React from "react";
import NavigationItem from "./NavigationItem";
import * as items from "./navItems";

class Navigation extends React.Component {
  navItems = items.NAV_ITEMS;
  state = {
    activeIndex: "Home",
  };

  onItemClick = (value) => {
    this.setState({ activeIndex: value });
  };

  renderedItems = () =>
    this.navItems.map((navItem) => {
      /* Nav elemanına tıklandığında "active" yapılmasını sağlayan lojik */
      const active = this.state.activeIndex === navItem.value ? "active" : null;

      return (
        <NavigationItem
          handleClick={(e) => this.onItemClick(e.target.textContent)}
          key={navItem.id}
          value={navItem.value}
          path={navItem.path}
          classname={`${navItem.classname} ${active}`}
        >
          <i style={{ pointerEvents: "none" }} className={navItem.icon} />
        </NavigationItem>
      );
    });

  render() {
    return (
      <div className="ui fluid container">
        <div className="ui secondary pointing menu">
          <div className="ui secondary pointing menu">
            <a class="item">{this.renderedItems()}</a>
          </div>

          <div className="right menu">
            <a class="ui item active">Logout</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
