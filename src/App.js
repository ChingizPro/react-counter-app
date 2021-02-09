import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 7 },
      { id: 3, value: 3 },
      { id: 4, value: 2 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mount");
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    let counters = this.state.counters.map((c) => {
      if (counter.props.nums.value !== 0 && c.id === counter.props.nums.id) c.value--;

      return c;
    });

    this.setState({ counters });
  };

  badgeCount = () => {
    let sum = 0;
    this.state.counters.map(c => {
      return sum += c.value;
    });

    return sum;
  }

  render() {
    console.log("App - Render");
    return (
      <React.Fragment>
        <Navbar badgeNumber={this.badgeCount} />
        <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onReset={this.handleReset} onDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

export default App;
