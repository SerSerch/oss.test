import './Card.scss';

import React from 'react';
import CardM from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Clear from '@material-ui/icons/Clear';

const Card = function(props) {
    const {
        id,
        onDelete,
        role,
        title,
        image,
        description,
        price,
    } = props;

    return (
        <CardM>
            <CardHeader
                action={role == 1 &&
                    <IconButton onClick={onDelete} data-id={id}>
                        <Clear />
                    </IconButton>
                }
                title={title}
            />
            <CardMedia
                className="card__media"
                image={image}
                title={title}
            />
            <CardContent>
                <Typography component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography className="card__price" component="p">
                    {price && `${price} $`}
                </Typography>
            </CardActions>
        </CardM>
    );
};
export default Card;