import './ProductsInfo.scss';

import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import {Container, Item} from 'components/Content';

const ProductsInfo = function(props) {
    const {
        quantityProducts,
        sumPriceProducts,
        role,
        deleteAllProducts
    } = props;

    return (
        <Container box>
            <Item container>
                <Item noSpace xs>
                    <Typography className="_ellipsis" gutterBottom variant="h5">
                        Quantity products
                    </Typography>
                </Item>
                <Item noSpace xs>
                    <Typography gutterBottom variant="h5" align="right">
                        {quantityProducts}
                    </Typography>
                </Item>
            </Item>
            <Item container>
                <Item noSpace xs>
                    <Typography className="_ellipsis" gutterBottom variant="h5">
                        Sum prices
                    </Typography>
                </Item>
                <Item noSpace xs>
                    <Typography gutterBottom variant="h5" align="right">
                        {sumPriceProducts} $
                    </Typography>
                </Item>
            </Item>
            <Item container>
                <Item noSpace xs>
                    <Typography className="_ellipsis" gutterBottom variant="h5">
                        Average cost
                    </Typography>
                </Item>
                <Item noSpace xs>
                    <Typography gutterBottom variant="h5" align="right">
                        {sumPriceProducts && (sumPriceProducts / quantityProducts).toFixed(2)} $
                    </Typography>
                </Item>
            </Item>
            {(role == 1) &&
            <Item xs>
                <Divider variant="middle"/>
                <Button onClick={deleteAllProducts} variant="contained" color="primary" fullWidth>
                    Delete all
                </Button>
            </Item>
            }
        </Container>
    );
};

export default ProductsInfo;