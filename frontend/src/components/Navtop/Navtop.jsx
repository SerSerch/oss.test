
import './Navtop.scss';
import React, {Fragment, useEffect} from 'react';
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
    const userl = {name: 'serserch', role: 1};
    const {
        menu,
        user,
        role,
        isLogined,
        userSignIn,
        userSignOut,
        userSignAuth,
        getAllProducts,
    } = props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    useEffect(function() {
        userSignAuth();
        getAllProducts();
    }, []);

    const signIn = function () {
        const userParams = [
            'login=serserch'
        ];

        userSignIn(userParams);
    };

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
                                    {menu.map((item, idx) => (item.access == 0 || user.role == item.access) && (
                                        <Link
                                            to={item.link}
                                            className="link"
                                            key={idx}
                                            aria-label={item.title}
                                        >
                                            <Item>
                                                <Typography className="paragraph _link _s">
                                                    {item.title}
                                                </Typography>
                                            </Item>
                                        </Link>
                                    ))}
                                </Container>
                            </div>

                            <div className="user section _desctop" wrap="nowrap">
                                {isLogined ?
                                    <Fragment>
                                        <div className="user__info">
                                            <Typography className="paragraph _small _ellipsis _s">
                                                {user.login}
                                            </Typography>
                                            <Typography className="paragraph _small _ellipsis _email _s">
                                                {role}
                                            </Typography>
                                        </div>
                                        <IconButton className="user__button"
                                                    aria-label="Signout"
                                                    onClick={userSignOut}
                                                    color="secondary"
                                        >
                                            <ExitToApp/>
                                        </IconButton>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <div className="user__info _right">
                                            <Typography className="paragraph _ellipsis _s">
                                                Signin
                                            </Typography>
                                        </div>
                                        <IconButton className="user__button"
                                                    aria-label="Signin"
                                                    onClick={signIn}
                                                    color="secondary"
                                        >
                                            <ExitToApp/>
                                        </IconButton>
                                    </Fragment>
                                }
                            </div>
                            <div className="section _mobile">
                                <IconButton className="menu__button _right"
                                            aria-label="Menu"
                                            aria-owns={anchorMenu.isOpen && 'menu-appbar'}
                                            aria-haspopup="true"
                                            onClick={anchorMenu.onOpen}
                                            color="secondary"
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
                        <div className="user">
                            {isLogined ?
                                <Fragment>
                                    <div className="user__info">
                                        <Typography className="paragraph _small _ellipsis">
                                            {user.login}
                                        </Typography>
                                        <Typography className="paragraph _small _ellipsis _email">
                                            {user.role}
                                        </Typography>
                                    </div>
                                    <IconButton className="user__button"
                                                aria-label="Signout"
                                                onClick={userSignOut}
                                    >
                                        <ExitToApp/>
                                    </IconButton>
                                </Fragment>
                                :
                                <Fragment>
                                    <div className="user__info _right">
                                        <Typography className="paragraph _ellipsis">
                                            Signin
                                        </Typography>
                                    </div>
                                    <IconButton className="user__button"
                                                aria-label="Signin"
                                                onClick={signIn}
                                    >
                                        <ExitToApp/>
                                    </IconButton>
                                </Fragment>
                            }
                        </div>
                        <Divider />
                        {menu.map((item, idx) => (item.access == 0 || user.role == item.access) && (
                            <Link
                                to={item.link}
                                className="link"
                                key={idx}
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