import React, { Component } from "react";

class Counter extends Component {
  //Counter is object
  // state = {
  //   value: this.props.counter.value //passing data from other component
  // };
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
  // handleIncrement = product => {
  //   //product is an arguement
  //   console.log(product);
  //   //console.log("incremented clicked", this); // this refers current counter object
  //   this.setState({ value: this.state.value + 1 }); // tell React that state of this component is going to change. React schedules a call, asynchronous call (happen in future)
  // };

  render() {
    return (
      <div>
        {this.props.counter.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // id:1 is an arguement (product) passing through an event handler
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
