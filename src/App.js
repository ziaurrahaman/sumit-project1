import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Section from "./components/Section";
import Counter from "./components/Counter";
import React from "react";
import ThemeContext from "./context/themeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="app">
        {/* <User render={(isLoggedIn) => (isLoggedIn ? "SHOJOL" : "GUEST")} /> */}
        {/* <Counter
          render={(counter, incrementCount) => (
            <ClickCounter counter={counter} incrementCount={incrementCount} />
          )}
        /> */}
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter counter={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        {/* <Counter
          render={(counter, incrementCount) => (
            <HoverCounter counter={counter} incrementCount={incrementCount} />
          )}
        /> */}
        <ThemeContext.Provider value={{ theme: theme }}>
          {" "}
          <Section theme={theme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}
