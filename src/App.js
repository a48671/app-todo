import React, { Component } from 'react';

import {Wrapper} from './styledApp';

import Dialog from './components/Dialog/Dialog';
import Task from './components/Task/Task';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Dialog
          title="Tasks"
        >
          <Task title="Title task" />
          <Task title="Title task" />
          <Task title="Title task" />
          <Task title="Title task task task task task task task" />
        </Dialog>
      </Wrapper>
    );
  }
}

export default App;
