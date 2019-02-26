import './Products.scss';

import React from 'react';

import {Container, Item} from 'components/Content';
import Card from 'components/Card';

import DefaultProductImg from './img/product.jpg';

const Products = function(props) {
    const {
        role,
        products,
        deleteProduct
    } = props;

    const deletedProduct = function(e) {
        deleteProduct(e.currentTarget.dataset.id)
    };

    return (
        <Container box>
            {products && products.map((i, idx) => (
                    <Item key={idx} xs={12} md={6} lg={4} >
                        <Card
                            id={i.id}
                            onDelete={deletedProduct}
                            key={idx}
                            role={role}
                            title={i.name}
                            image={DefaultProductImg}
                            description={i.description}
                            price={i.price}
                        />
                    </Item>
                )
            )
            }
        </Container>
    );
}

export default Products;