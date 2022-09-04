import React from "react";
import $ from "jquery";

class AccordionItem extends React.Component {
  changeItem(event) {
    let item = event.target;
    $(item).addClass("activeItem").siblings().removeClass("activeItem");
    let tab = $($(item).attr("target-tab"));
    tab.addClass("activeTab").siblings().removeClass("activeTab");
  }

  render() {
    let Icon = this.props.Icon;
    let itemClass = this.props.index == 1 ? "activeItem" : "";
    return (
      <div
        className={`accordion-item ${itemClass}`}
        type="button"
        target-tab={`#menu-collapse-tab-${this.props.index}`}
        onMouseEnter={this.changeItem}
      >
        {this.props.path ? <Icon path={this.props.path} /> : <Icon />}

        {this.props.text}
      </div>
    );
  }
}

export default AccordionItem;
