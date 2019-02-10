import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Wrapper} from './styledApp';

import Dialog from './components/Dialog/Dialog';
import Task from './components/Task/Task';

class App extends Component {

  componentWillMount() {
    // getting array tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    // if(savedTasks) {
    //   this.setState({
    //     tasks: savedTasks
    //   });
    // }
  }

  componentDidUpdate() {
    // save array with tasks in localStorage 
    const {tasks} = this.props;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {

    const clickToCheckboxHandler = (index) => {
      const {tasks} = this.props;
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

    
    const {tasks, order} = this.props;

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
              onChangeTaskHandler={onChangeTaskHandler}
            /> 
          );
        })
      );
    };

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
        >
          {renderTasks()}
        </Dialog>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const {tasks, order} = state;
  return {
    tasks,
    order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: () => dispatch({type: 'ADD_TASK'}),
    removeTask: (index) => dispatch({type: 'REMOVE_TASK', index: index})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
