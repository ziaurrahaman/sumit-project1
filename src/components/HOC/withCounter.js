import React from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    incrementCount = () => {
      this.setState((perviousState) => ({ count: perviousState.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return (
        <OriginalComponent count={count} incrementCount={this.incrementCount} />
      );
    }
  }
  return NewComponent;
};
export default withCounter;
