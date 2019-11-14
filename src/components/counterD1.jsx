import React, { Component } from "react";

class Counter extends Component {
  //Counter is object
  state = {
    count: 0,
    tags: []
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); // this refers Counter object
  // }
  handleIncrement = product => {
    //product is an arguement
    console.log(product);
    //console.log("incremented clicked", this); // this refers current ounter object
    this.setState({ count: this.state.count + 1 }); // tell React that state of this component is going to change. React schedules a call, asynchronous call (happen in future)
  };
  render() {
    // return (
    //   <div>
    //     {this.state.tags.length === 0 && "Please create a new tag!"}
    //     {this.renderTags()}
    //   </div>
    // );
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} // id:1 is an arguement (product) passing through an event handler
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
