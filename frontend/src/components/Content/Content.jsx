import './Content.scss';

import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';

export const Container = function(props) {
    const { box, className, ...other } = props;

    const containerClasses = classNames(
        {
            'content-box': box,
        },
        className
    );

    return (
        <Grid container className={containerClasses} {...other}/>
    );
};

export const Item = function(props) {
    const { noSpace, className, ...other } = props;

    const itemClasses = classNames(
        {
            'content-item': !noSpace,
        },
        className
    );

    return (
        <Grid item className={itemClasses} {...other} />
    );
};