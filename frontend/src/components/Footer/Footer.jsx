import './Footer.scss';

import React, { PureComponent } from 'react';
import {Container, Item} from 'components/Content';

class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <Container box>
                    <Item>
                        &copy;
                    </Item>
                </Container>
            </footer>
        );
    }
}

export default Footer;