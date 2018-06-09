import React from "react";

class Click1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}: problem with above approch
      </button>
    );

  }
}

export default Click1;
