import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return(
      <p>Hello. {this.props.greetTarget} !</p>
    );
  }
}

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Spider Man"/>
    <HelloWorld greetTarget="Super Man"/>
    <HelloWorld greetTarget="Ant Man"/>
    <HelloWorld greetTarget="He Man"/>
  </div>,
  document.getElementById('container')
);
