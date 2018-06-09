import React from "react";

class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // basic object
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default Click;
