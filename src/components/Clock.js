import React from "react";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = () => {
    if (this.state.locale === "bn-BD") {
      this.setState({
        locale: "en-US",
      });
    } else {
      this.setState({
        locale: "bn-BD",
      });
    }
  };

  render() {
    return (
      <>
        <h1 className="heading">
          <span className="text">
            {this.state.date.toLocaleTimeString(this.state.locale)}
          </span>
        </h1>

        <button onClick={this.handleClick}>Click Here</button>
      </>
    );
  }
}
export default Clock;
