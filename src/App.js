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
  }
  currentTitle
  render() {

    const clickToRemoveHandler = (index) => {
      const {tasks} = this.state;
      let updateTasks = [];
      tasks.map((task, i) => {
        if(i !== index) updateTasks.push(task);
      });
      this.setState({
        tasks: updateTasks
      });
    };

    const clickToCheckboxHandler = (index) => {
      const {tasks} = this.state;
      let updateTasks = [];
      tasks.map((task, i) => {
        if(i === index) {
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

    const {tasks, order} = this.state;

    const renderTasks = () => { 
      return(
        tasks.map((task, index) => {
          return(
            <Task 
              key={index}
              index={index}
              title={task.title} 
              checked={task.checked}
              clickToCheckboxHandler={clickToCheckboxHandler}
              clickToRemoveHandler={clickToRemoveHandler}
              onChangeTaskHandler={onChangeTaskHandler}
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

    const onChangeTaskHandler = (e, index) => {
      const currentValue = e.target.value;
      const newTasks = tasks;
      console.log(tasks);
      console.log(index);
      newTasks[index].title = currentValue;

      this.setState({
        tasks: newTasks
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
