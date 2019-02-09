import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Close,
  Checkbox,
  Input,
} from './styled';
import { isNullOrUndefined } from 'util';

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

  state = {
    isEdit: false
  }

  componentWillMount(){
    const {title} = this.props;
    if(title === '') this.setState({isEdit: true});
  }

  render() {
    const {
      index, 
      title, 
      checked, 
      clickToCheckboxHandler, 
      clickToRemoveHandler,
      addTaskConfirmHandler,
      onChangeTaskHandler
    } = this.props;

    const {isEdit} = this.state;



    const clickToEditHandler = () => {
      this.setState({
        isEdit: true
      });
    };

    const onClickConfirmHandler = () => {
      const {value} = this.state;
      const {id} = this.props;
      addTaskConfirmHandler(value, id);
      this.setState({
        isEdit: false
      });
    }
    
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
        <Input 
          placeholder="Input your new task" 
          value={title}
          onChange={e => onChangeTaskHandler(e, index)}
        />
        
        <Close onClick={() => clickToRemoveHandler(index)}/>
      </Wrapper>
    )
  }
}
