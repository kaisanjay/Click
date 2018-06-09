import React from "react";

class Click2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(({ count }) => ({ count: count + 1 }));
    this.setState(({ count }) => ({ count: count + 1 }));
    this.setState(({ count }) => ({ count: count + 1 }));
    console.log(this.state.count);
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.count}: solution 1</button>
    );
  }
}

export default Click2;
