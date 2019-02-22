import './Hello.scss';

import React, { PureComponent } from 'react';

import {Container, Item} from 'components/Content'

class Hello extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <Container className="hello" box>
                <Item>
                    Hello!
                </Item>
            </Container>
        );
    }
}

export default Hello;