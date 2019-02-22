import './Hello.scss';

import React from 'react';

import {Container, Item} from 'components/Content';

const Hello = function(props) {
    return (
        <Container className="hello" box>
            <Item>
                Hello!
            </Item>
        </Container>
    );
};

export default Hello;