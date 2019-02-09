import React, { Component } from 'react';

import {sortTask} from './functions/sortTask';

import {Wrapper} from './styledApp';

import Dialog from './components/Dialog/Dialog';
import Task from './components/Task/Task';

class App extends Component {
  state = {
    tasks: [],
    order: true
  }

  componentWillMount() {
    // getting array tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks) {
      this.setState({
        tasks: savedTasks
      });
    }
  }

  componentDidUpdate() {
    // save array with tasks in localStorage 
    const {tasks} = this.state;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
  }
  currentTitle
  render() {

    const clickToRemoveHandler = (id) => {
      const {tasks} = this.state;
      let updateTasks = [];
      tasks.map(task => {
        if(task.id !== id) updateTasks.push(task);
      });
      this.setState({
        tasks: updateTasks
      });
    };

    const clickToCheckboxHandler = (id) => {
      const {tasks} = this.state;
      let updateTasks = [];
      tasks.map(task => {
        if(task.id === id) {
          task.checked = !task.checked;
        }
        updateTasks.push(task);
      });
      this.setState({
        tasks: updateTasks
      });
    };

    const addTaskHandler = () => {
      const {tasks} = this.state;
      if(tasks.length) {
        if(tasks[tasks.length - 1].title === '') return;
      }
      let updateTasks = tasks;
      updateTasks.push({
        id: tasks.length,
        title: '',
        checked: false
      });
      this.setState({
        tasks: updateTasks
      });
    }

    const addTaskConfirmHandler = (value, id) => {
      const {tasks} = this.state;
      let updateTasks = tasks;
      updateTasks[id].title = value;
      this.setState({
        tasks: updateTasks
      });
    }

    const {tasks, order} = this.state;

    const renderTasks = () => { 
      return(
        tasks.map((task, index) => {
          return(
            <Task 
              key={index}
              id={task.id}
              title={task.title} 
              checked={task.checked}
              clickToCheckboxHandler={clickToCheckboxHandler}
              clickToRemoveHandler={clickToRemoveHandler}
              addTaskConfirmHandler={addTaskConfirmHandler}
            /> 
          );
        })
      );
    };

    const clickToSortHandler = () => {
      const {order} = this.state;

      const sortedTasks = order ? sortTask(tasks) : sortTask(tasks).reverse();
      
      this.setState({
        tasks: sortedTasks,
        order: !order
      });
    }

    return (
      <Wrapper>
        <Dialog
          title="Tasks"
          order={order}
          addTaskHandler={addTaskHandler}
          clickToSortHandler={clickToSortHandler}
        >
          {renderTasks()}
        </Dialog>
      </Wrapper>
    );
  }
}

export default App;
