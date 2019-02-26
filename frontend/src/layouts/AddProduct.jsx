import React from 'react';
import {Container, Item} from 'components/Content';

import AddProduct from 'containers/AddProductContainer';
import ProductsInfo from 'containers/ProductsInfoContainer';

const Home = function() {
    return (
        <Container box>
            <Item xs={12} sm={5} lg={3} noSpace>
                <ProductsInfo />
            </Item>
            <Item xs={12} sm={7} lg={9} noSpace>
                <AddProduct />
            </Item>
        </Container>
    );
};

export default Home;