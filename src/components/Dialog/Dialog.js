import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    Wrapper, 
    Header, 
    Content, 
    Footer, 
    Button
} from './styled';

export default class Dialog extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node,
        addTaskHandler: PropTypes.func
    };

    static defaultProps = {
        title: '',
        children: null,
        addTaskHandler: () => null
    };

  render() {
      const {title, children, addTaskHandler} = this.props;
    return (
      <Wrapper>
            <Header>{title}</Header>
            <Content>
                {children}
            </Content>
            <Footer>
                <Button>Sort</Button>
                <Button onClick={addTaskHandler}>Add task</Button>
            </Footer>
      </Wrapper>
    )
  }
}



