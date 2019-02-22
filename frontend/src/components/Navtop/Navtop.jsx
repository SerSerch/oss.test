
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
import Tooltip from "@material-ui/core/Tooltip";

import {Container, Item} from 'components/Content';
import useAnchorMenu from 'efi/useAnchorMenu';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const Navtop = function(props) {
    const anchorMenu = useAnchorMenu(false);
    const user = false;
    const { menu } = props;

    return (
        <Fragment>
            <AppBar component="nav" position="fixed" color="inherit">
                <Container box>
                    <Item xs={12} noSpace>
                        <Toolbar>
                            <div className="logo _navtop">logo</div>
                            <div className="grow">
                                <Container className="section _desctop" justify="center">
                                    {menu.map((item, index) => (
                                        <Link
                                            to={item.link}
                                            className="link"
                                            key={index}
                                            aria-label={item.title}
                                        >
                                            <Item>
                                                <Typography className="text _link">
                                                    {item.title}
                                                </Typography>
                                            </Item>
                                        </Link>
                                    ))}
                                    <a href="/api/" className="link">
                                        <Item>
                                            <Typography className="text _link">
                                                RestAPI
                                            </Typography>
                                        </Item>
                                    </a>
                                </Container>
                            </div>
                            {user &&
                            <div className="user section _desctop" wrap="nowrap">
                                <div className="user__info">
                                    <Tooltip title={user.name} aria-label={user.name}>
                                        <Typography className="paragraph _small _ellipsis">
                                            {user.name}
                                        </Typography>
                                    </Tooltip>
                                    <Tooltip title={user.email} aria-label={user.email}>
                                        <Typography className="paragraph _small _ellipsis _email">
                                            {user.email}
                                        </Typography>
                                    </Tooltip>
                                </div>
                                <div>
                                    <img className="user__image" src={user.photo} alt=""/>
                                </div>
                                <div className="user__icon">
                                    SOut
                                </div>
                            </div>
                            }
                            <div className="section _mobile">
                                <IconButton className="menu__button _right"
                                            aria-label="Menu"
                                            aria-owns={anchorMenu.isOpen && 'menu-appbar'}
                                            aria-haspopup="true"
                                            onClick={anchorMenu.onOpen}
                                >
                                    <div>icon</div>
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
                        {user ?
                            <div className="user">
                                <div>
                                    <img className="user__image" src={user.photo} alt=""/>
                                </div>
                                <div className="user__info">
                                    <Typography className="paragraph _name _ellipsis">
                                        {user.name}
                                    </Typography>
                                    <Typography className="paragraph _small _ellipsis _email">
                                        {user.email}
                                    </Typography>
                                </div>
                            </div>
                            : ''
                        }
                        <a href="/api/" className="link">
                            <ListItem button className="">
                                <ListItemText primary="RestAPI" />
                            </ListItem>
                        </a>
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