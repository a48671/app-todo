import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import TextareaAutosize from 'react-autosize-textarea';

import {
  Wrapper,
  Close,
  Checkbox,
} from './styled';

class Task extends PureComponent {

  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    checked: PropTypes.bool,
    removeTask: PropTypes.func,
    clickToCheckboxHandler: PropTypes.func,
    onChangeTaskHandler: PropTypes.func,
  };

  static defaultProps = {
      index: 0,
      title: '',
      checked: false,
      removeTask: () => null,
      onChangeTaskHandler: () => null,
      clickToCheckboxHandler: () => null,
  };

  render() {
    const {
      index, 
      title, 
      checked, 
      clickToCheckboxHandler, 
      removeTask,
      onChangeTaskHandler
    } = this.props;


    const clickToEditHandler = () => {
      this.setState({
        isEdit: true
      });
    };
    
    return (
      <Wrapper>
        <Checkbox 
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
          value={title}
          onChange={e => onChangeTaskHandler(e, index)}
        />
        
        <Close onClick={() => removeTask(index)}/>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
      removeTask: (index) => dispatch({type: 'REMOVE_TASK', index: index})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);