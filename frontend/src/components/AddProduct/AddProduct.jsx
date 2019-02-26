import './AddProduct.scss';

import React, {Fragment, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from "components/Card";
import {Container, Item} from 'components/Content';

import useFormInput from 'efi/useFormInput';

import DefaultProductImg from "components/Products/img/product.jpg";

const AddProduct = function(props) {
    const {
        user,
        isLogined,
        createProduct,
    } = props;

    const name = useFormInput("Product name");
    const description = useFormInput("Small good");
    const price = useFormInput(700);
    const [isValid, setIsValid] = useState(true);

    useEffect(function () {
        setIsValid(
            RegExp('^[а-яА-ЯёЁ\\w]{3}[а-яА-ЯёЁ\\w ]{0,17}$').test(name.value) &&
            RegExp('^[а-яА-ЯёЁ\\w]{3}[а-яА-ЯёЁ\\w ]{0,17}$').test(description.value) &&
            RegExp('^[0-9]{1,9}(\\.[0-9]{1,2})?$').test(price.value)
        );
    }, [name.value, description.value, price.value]);

    const addProduct = function() {
        const product = {
            "autor": user.id,
            "name": name.value,
            "image": "/img/product.jpg",
            "description": description.value,
            "price": parseFloat(price.value).toFixed(2),
            "currency": "$",
            "date": new Date().toISOString()
        };

        createProduct(product);
    };

    return (
        <Container box>
            {(isLogined && user.role == 1) ?
                <Fragment>
                    <Item xs={12} lg={6}>
                        <Card
                            title={name.value}
                            image={DefaultProductImg}
                            description={description.value}
                            price={price.value}
                        />
                    </Item>
                    <Item xs={12} lg={6}>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            {...name}
                        />
                        <TextField
                            id="outlined-description"
                            label="Description"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            {...description}
                        />
                        <TextField
                            id="outlined-price"
                            label="Price"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            {...price}
                        />
                        <Button
                            onClick={addProduct}
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={!isValid}
                        >
                            Add product
                        </Button>
                    </Item>
                </Fragment>
                :
                <Item xs>
                    <Typography variant="h4" align="center">
                        Sorry, this page is not available.
                    </Typography>
                </Item>
            }
        </Container>
    );
};

export default AddProduct;