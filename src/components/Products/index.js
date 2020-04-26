import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, Title } from './styles';
import Product from '../Product/index';

const products = [{
  name: 'Maca',
  price: '0,45 R$/Unid',
  description: 'Fruta grande, importada. Na versao vermelha e verde.',
  image: 'https://www.chelanfresh.com/wp-content/uploads/2018/11/apple.png',
},
{
  name: 'Abacate',
  price: '1,80 R$/Unid',
  description: 'Fruta grande, importada. Ideal para uma vitamina ou ate guacamole!',
  image: 'https://freshorganicos.com.br/wp-content/uploads/2016/01/FRESH_ImagemPadrao_HortiFruti_5_600x600.png',
}];

export default function Products() {
  return (
    <Container id="products">
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} align="center">
          <Title>Mais Vendidos</Title>
        </Grid>
        {products.map((el) => (
          <Grid item lg={3} md={6} sm={12} xs={12} align="center">
            <Product fruit={el} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
