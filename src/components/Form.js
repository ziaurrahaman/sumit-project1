import React from "react";

class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "javaScript is awsome",
    library: "React",
    isAwsome: true,
  };
  handlleChange = (e) => {
    switch (e.target.name) {
      case "titleInput":
        this.setState({
          title: e.target.value,
        });
        break;
      case "textArea":
        this.setState({
          text: e.target.value,
        });
        break;
      case "select":
        this.setState({
          library: e.target.value,
        });
        break;
      case "check":
        this.setState({
          isAwsome: e.target.checked,
        });
        break;
      default:
        this.setState({
          title: e.target.value,
          text: e.target.value,
        });
    }
  };

  submitHandler = (e) => {
    const { title, text, library, isAwsome } = this.state;
    e.preventDefault();
    console.log(title, library, text, isAwsome);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            name="titleInput"
            type={"text"}
            placeholder={"Enter a Title"}
            value={this.state.title}
            onChange={this.handlleChange}
          />
          <br></br>
          <br></br>
          <textarea
            name="textArea"
            value={this.state.text}
            onChange={this.handlleChange}
          />

          <br></br>
          <select
            name="select"
            value={this.state.library}
            onChange={this.handlleChange}
          >
            <option value={"React"}>React</option>
            <option value={"Angular"}>Angular</option>
          </select>
          <input
            name="check"
            type={"checkbox"}
            checked={this.state.isAwsome}
            onChange={this.handlleChange}
          ></input>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
