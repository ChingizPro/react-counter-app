import React, { Component } from "react";

class Counter extends Component {
    // constructor () {
    //     super(); // ! to use this inside constructor super() has to be used
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     this.handleDecrement = this.handleDecrement.bind(this);
    // }

    // renderList () {
    //     if(this.state.items.length === 0) return <p>The array is empty!</p>;

    //     return <ul>{ this.state.items.map(item => <li key={item}>{item}</li>) }</ul>;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("Previous Props: ", prevProps);
    //     console.log("Previous State: ", prevState);
    // }

    componentWillUnmount() {
        console.log("Component - Unmount");
    }

    render() {
        console.log("Counter - Render");
        return (
            <div className="mb-4 wrap">
                <button onClick={() => this.props.onDecrement(this)} className="btn btn-sm btn-secondary">
                    Decrement
                </button>
                <span className={this.getBadgeClasses()}>{this.checkCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.nums)} className="btn btn-sm btn-success">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.nums.id)} className="btn btn-sm btn-danger ml-3">
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge mx-3 badge-";
        classes += this.props.nums.value === 0 ? "warning" : "primary";
        return classes;
    }

    checkCount() {
        const { value } = this.props.nums;
        return value === 0 ? "zero" : value;
    }
}

export default Counter;
