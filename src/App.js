import React, { Component } from 'react';

import {Wrapper} from './styledApp';

import Dialog from './components/Dialog/Dialog';
import Task from './components/Task/Task';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'Title task 1',
        checked: false
      },
      {
        id: 2,
        title: 'Title task 2',
        checked: false
      },
      {
        id: 3,
        title: 'Title task 3',
        checked: true
      },
      {
        id: 4,
        title: 'Title task 4',
        checked: false
      }
    ]
  }
  render() {

    const clickToRemoveHandler = (id) => {
      const {tasks} = this.state;
      let updateTasks = [];
      tasks.map(task => {
        if(task.id != id) updateTasks.push(task);
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

    const renderTasks = () => {
      const {tasks} = this.state;

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
            /> 
          );
        })
      );
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

export default App;
