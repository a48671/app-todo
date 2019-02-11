import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Wrapper} from './styledApp';

import Dialog from './components/Dialog/Dialog';
import Task from './components/Task/Task';

import {saveTasks, gettingTasks} from './redux/actions/actions';

class App extends Component {

  componentWillMount() {
    
  }

  componentDidUpdate() {
    // save array with tasks in localStorage 
    localStorage.setItem('tasks', JSON.stringify(this.props.state));
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

    
    const {tasks} = this.props;

    const renderTasks = () => { 
      try {
        return(
          tasks.map((task, index) => {
            return(
              <Task 
                key={index}
                index={index}
                title={task.title} 
                checked={task.checked}
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
    state,
    tasks,
    order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveTasks: () => dispatch(saveTasks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
