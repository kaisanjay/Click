import React from "react";

class Click3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.count}: solution 2</button>
    );
  }
}

export default Click3;
