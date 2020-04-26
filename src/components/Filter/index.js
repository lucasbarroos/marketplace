import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, Title } from './styles';

export default function Filter() {
  return (
    <Container id="filter">
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} align="center">
          <Title>Filter</Title>
        </Grid>
      </Grid>
    </Container>
  );
}
