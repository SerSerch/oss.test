import './Footer.scss';

import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Item} from 'components/Content';

const Footer = function(props) {
    return (
        <footer className="footer">
            <Container box>
                <Item>
                    <Typography className="paragraph _s">
                        &copy;SerSerch
                    </Typography>
                </Item>
            </Container>
        </footer>
    );
};

export default Footer;