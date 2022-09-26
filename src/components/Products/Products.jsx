import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
// import SubHeader from '../SubHeader';

//may try playing with the subheader on this page and the cart page
// later to make it like nucamps

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
        <div className={classes.toolbar}/>
        {/* <SubHeader current={'Home'}/> */}
        <Grid container justifyContent="center" spacing={4}>
            {/* mapping function maps to a callback function, and loops through the items
            of the products array to create a new list displayed to the application */}
         {products.map((product)=>(
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
         ))}
        </Grid>
    </main>
    );

}

export default Products;