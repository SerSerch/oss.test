import './Footer.scss';

import React from 'react';
import {Container, Item} from 'components/Content';

const Footer = function(props) {
    return (
        <footer className="footer">
            <Container box>
                <Item>
                    &copy;SerSerch
                </Item>
            </Container>
        </footer>
    );
};

export default Footer;