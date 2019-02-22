import './Content.scss';

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

export class Container extends PureComponent {
    static propTypes = {
        box: PropTypes.bool,
        className: PropTypes.string,
    };

    render() {
        const { box, className, ...other } = this.props;

        const containerClasses = classNames(
            {
                'content-box': box,
            },
            className
        );

        return (
            <Grid container className={containerClasses} {...other}/>
        );
    }
}

export class Item extends PureComponent {
    static propTypes = {
        noSpace: PropTypes.bool,
        className: PropTypes.string,
    };

    render() {
        const { noSpace, className, ...other } = this.props;

        const itemClasses = classNames(
            {
                'content-item': !noSpace,
            },
            className
        );

        return (
            <Grid item className={itemClasses} {...other} />
        );
    }
}