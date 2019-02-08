import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Close, Checkbox, Title} from './styled';

export default class Task extends PureComponent {

  static propTypes = {
    title: PropTypes.string
};

static defaultProps = {
    title: ''
};

  render() {
    const {title} = this.props;
    
    return (
        <Wrapper>
            <Checkbox>
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
            <Title>{title}</Title>
            <Close />
        </Wrapper>
    )
  }
}
