import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import TextareaAutosize from 'react-autosize-textarea';

import {removeTask, changeTask} from '../../redux/actions/actions';

import {
  Wrapper,
  Close,
  Checkbox,
} from './styled';

class Task extends PureComponent {

  state = {
    value: '',
    onFocus: false,
  };

  static propTypes = {
    index: PropTypes.number,
    tasks: PropTypes.array,
    checked: PropTypes.bool,
    onFocus: PropTypes.bool,
    removeTask: PropTypes.func,
    clickToCheckboxHandler: PropTypes.func,
    changeTask: PropTypes.func,
  };

  static defaultProps = {
      index: 0,
      tasks: [],
      checked: false,
      onFocus: false,
      removeTask: () => null,
      changeTask: () => null,
      clickToCheckboxHandler: () => null,
  };
  
  render() {
    
    const {
      index, 
      tasks, 
      checked, 
      clickToCheckboxHandler, 
      removeTask,
      changeTask
    } = this.props;
    
    const title = tasks[index].title;

    const {onFocus, value} = this.state;

    const onBlurHandler = () => {
      this.setState({onFocus: false});
      changeTask(index, value);
    };

    const onFocusHandler = () => {
      if(!onFocus) {
        this.setState({
          value: title,
          onFocus: true
        });
      }
    };

    const changeTaskHandler = (event) => {
      this.setState({
        value: event.target.value
      })
    };
    
    return (
      <Wrapper title={title}>
        
        <Checkbox 
          title={title}
          checked={checked}
          onClick={() => clickToCheckboxHandler(index)}
        >
          <svg
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.7903 9.06735L1.19757 5.47463L0 6.6722L4.7903 11.4625L15.0552 1.19757L13.8576 0L4.7903 9.06735Z"
            />
          </svg>
        </Checkbox>

        <TextareaAutosize
          placeholder="Input your new task" 
          value={onFocus ? value : title}
          onChange={e => {changeTaskHandler(e)}} 
          onBlur={() => onBlurHandler()}
          onFocus={() => onFocusHandler()}
        />
        
        <Close onClick={() => removeTask(index)}/>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  const {tasks} = state;
  return {
    tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
      removeTask: index => dispatch(removeTask(index)),
      changeTask: (index, value) => dispatch(changeTask(index, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);