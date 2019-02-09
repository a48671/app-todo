import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TextareaAutosize from 'react-autosize-textarea';

import {
  Wrapper,
  Close,
  Checkbox,
} from './styled';

export default class Task extends PureComponent {

  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    checked: PropTypes.bool,
    clickToCheckboxHandler: PropTypes.func,
    onChangeTaskHandler: PropTypes.func,
    clickToRemoveHandler: PropTypes.func
  };

  static defaultProps = {
      index: 0,
      title: '',
      checked: false,
      clickToCheckboxHandler: () => null,
      onChangeTaskHandler: () => null,
      clickToRemoveHandler: () => null
  };

  render() {
    const {
      index, 
      title, 
      checked, 
      clickToCheckboxHandler, 
      clickToRemoveHandler,
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
        
        <Close onClick={() => clickToRemoveHandler(index)}/>
      </Wrapper>
    )
  }
}
