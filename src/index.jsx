import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// FUNCTIONAL COMPONENT
// - has only props (not changable)
// - has no states!
const Hello = (props) => {
  return <div>Hello, {props.name} </div>;
};

// CLASS COMPONENT
// - DONT FORGET TO ADAPT IMPORT LINE: import React, { Component } from react
// - has props, state variables and class fucntions
// - render() function is mandatory
// - constructor is mandatory
// - extends Component
class Hello2 extends Component {
  constructor(props) {
    super(props);

    this.state = { // defines initial state
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render () {
    // BUILD AND RENDER HTML
    const addClass = this.state.clicked ? "clicked" : null;
    return (
      <div className={addClass + " greeting"}
        onClick={this.handleClick}>
        Hello {this.props.name}
      </div>
    )
  }
}


// MAIN RENDER FUNCTION!
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Hello2 name="Thomas" />,
    root
  );
}


