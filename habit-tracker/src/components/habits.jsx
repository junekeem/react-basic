import React, { Component } from 'react';
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  }

  handleIncrement = habit => {
    this.props.onIncrement(habit);
  }
  handleDecrement = habit => {
    this.props.onDecrement(habit);
  }
  handleDelete = habit => {
    this.props.onDelete(habit);
  }
  handleAdd = name => {
    this.props.onAdd(name);
  }

  render() {
    return (
      <ul>
        <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
        {
          this.props.habits.map(habit => (<Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />))
        }
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </ul>
    );
  }
}

export default Habits;