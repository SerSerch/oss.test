
import './Navtop.scss';
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';

import {Container, Item} from 'components/Content';
import Logo from './img/white-logo-new.svg';

import useAnchorMenu from 'efi/useAnchorMenu';

const Navtop = function(props) {
    const anchorMenu = useAnchorMenu(false);
    const user = {name: 'serserch', role: 'admin'};
    const { menu } = props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <Fragment>
            <AppBar component="nav" position="fixed">
                <Container box>
                    <Item xs={12} noSpace>
                        <Toolbar>
                            <div className="logo _navtop">
                                <Link
                                    to="/"
                                    className="link"
                                    aria-label="oss.test"
                                >
                                    <img className="logo _navtop" src={Logo} alt="oss.test"/>
                                </Link>
                            </div>
                            <div className="grow">
                                <Container className="section _desctop" justify="center">
                                    {menu.map((item, idx) => (item.access == 'all' || user.role == item.access) && (
                                        <Link
                                            to={item.link}
                                            className="link"
                                            key={idx}
                                            aria-label={item.title}
                                        >
                                            <Item>
                                                <Typography className="text _link">
                                                    {item.title}
                                                </Typography>
                                            </Item>
                                        </Link>
                                    ))}
                                </Container>
                            </div>
                            {user &&
                            <div className="user section _desctop" wrap="nowrap">
                                <div className="user__info">
                                    <Typography className="paragraph _small _ellipsis">
                                        {user.name}
                                    </Typography>
                                    <Typography className="paragraph _small _ellipsis _email">
                                        {user.role}
                                    </Typography>
                                </div>
                                <IconButton className="user__icon"
                                            aria-label="Exit"
                                >
                                    <ExitToApp />
                                </IconButton>
                            </div>
                            }
                            <div className="section _mobile">
                                <IconButton className="menu__button _right"
                                            aria-label="Menu"
                                            aria-owns={anchorMenu.isOpen && 'menu-appbar'}
                                            aria-haspopup="true"
                                            onClick={anchorMenu.onOpen}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </Item>
                </Container>
            </AppBar>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                             open={anchorMenu.isOpen}
                             onClose={anchorMenu.onClose}
                             onOpen={anchorMenu.onOpen}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={anchorMenu.onClose}
                    onKeyDown={anchorMenu.onClose}
                    className="mobile-menu"
                >
                    <List component="nav">
                        {user &&
                        <div className="user">
                            <div className="user__info">
                                <Typography className="paragraph _name _ellipsis">
                                    {user.name}
                                </Typography>
                                <Typography className="paragraph _small _ellipsis _email">
                                    {user.role}
                                </Typography>
                            </div>
                        </div>
                        }
                        <Divider />
                        {menu.map((item, index) => (
                            <Link
                                to={item.link}
                                className="link"
                                key={index}
                                aria-label={item.title}
                            >
                                <ListItem button className="">
                                    <ListItemText primary={item.title}/>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </Fragment>
    );
};

export default Navtop;