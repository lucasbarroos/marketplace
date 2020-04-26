import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Container,
  FruitSection,
  FruitTitle,
  FruitsImage,
} from './styles';

const fruitImage = 'https://wallpaperplay.com/walls/full/9/5/1/317864.jpg';

export default function Sections() {
  return (
    <Container id="filter">
      <Grid container spacing={6}>
        <Grid item lg={6} md={6} sm={12} xs={12} align="center">
          <FruitSection>
            <FruitTitle>Frutas</FruitTitle>
            <FruitsImage src={fruitImage} />
          </FruitSection>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} align="center">
          <FruitSection>
            <FruitTitle>Frutas</FruitTitle>
            <FruitsImage src={fruitImage} />
          </FruitSection>
        </Grid>
      </Grid>
    </Container>
  );
}
