import React from 'react';
import { Button } from '@material-ui/core';
import {
  Container,
  Form,
  FormPrice,
  FormTitle,
  FormDescription,
  Image,
  ButtonForm,
} from './styles';

export default function ProductCard({ fruit, onClick }) {
  return (
    <Container onClick={onClick}>
      <Form>
        <Image src={fruit.image} />
        <FormPrice>{fruit.price}</FormPrice>
        <FormTitle>{fruit.name}</FormTitle>
        <FormDescription>{fruit.description}</FormDescription>
        <ButtonForm>
          <Button variant="contained" color="secondary">Comprar</Button>
        </ButtonForm>
      </Form>
    </Container>
  );
}
