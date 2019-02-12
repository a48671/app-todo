import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Wrapper} from './styledApp';

import Dialog from './components/Dialog/Dialog';
import Task from './components/Task/Task';

import {gettingTasks, removeTask, changeTask} from './redux/actions/actions';

class App extends Component {

  componentWillMount() {
    // getting array tasks from localStorage
    let savedTasks = JSON.parse(localStorage.getItem('tasks'));

    if(!savedTasks || typeof(savedTasks) !== 'object') {
        savedTasks = {
            tasks: [],
            order: true
        }
    } 
    this.props.gettingTasks(savedTasks);
  }

  componentDidUpdate() {
    // save array with tasks in localStorage 
    try {
      localStorage.setItem('tasks', JSON.stringify({
        tasks: this.props.tasks,
        order: this.props.order
      }));
    } catch(error) {
      console.log(error);
    }
  }

  render() {

    const {tasks, removeTask, changeTask} = this.props;

    const clickToCheckboxHandler = (index) => {

      const updateTasks = (
        tasks.map((task, i) => {
          if(i === index) {
            task.checked = !task.checked;
          } 
          return task;
        })
      );
      
      this.setState({
        tasks: updateTasks
      });
    };

    const renderTasks = () => { 
      try {
        return(
          tasks.map((task, index) => {
            return(
              <Task 
                key={index}
                index={index}
                title={task.title} 
                tasks={tasks} 
                checked={task.checked}
                removeTask={removeTask}
                changeTask={changeTask}
                clickToCheckboxHandler={clickToCheckboxHandler}
              /> 
            );
          })
        );
      } catch {
        return null;
      }
    };

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
    gettingTasks: tasks => dispatch(gettingTasks(tasks)),
    removeTask: index => dispatch(removeTask(index)),
    changeTask: (index, value) => dispatch(changeTask(index, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
