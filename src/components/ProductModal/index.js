import React from 'react';
import { Button } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import {
  Container,
  Content,
  FruitImageContainer,
  FruitImage,
  FormTitle,
  FormPrice,
  FormDescription,
  FormButton,
  QuantityForm,
} from './styles';

export default function ProductModal({ product, onClose }) {
  const [fruitQuantity, setFruitQuantity] = React.useState(0);

  const handleAdd = () => {
    setFruitQuantity(fruitQuantity + 1);
  };

  const handleRemove = () => {
    // Alert to check before remove the item
    if ((fruitQuantity - 1) <= 0) onClose();
    setFruitQuantity(fruitQuantity - 1);
  };

  const handleBuy = () => {
    onClose();
  };

  return (
    <Container>
      <Content>
        <FruitImageContainer>
          <FruitImage src={product.image} />
        </FruitImageContainer>
        <FormTitle>{product.name}</FormTitle>
        <FormPrice>{product.price}</FormPrice>
        <FormTitle>{product.name}</FormTitle>
        <FormDescription>{product.description}</FormDescription>
        <FormButton>
          <Button color="secondary" onClick={handleRemove}>
            <RemoveIcon />
          </Button>
          <QuantityForm>{fruitQuantity}</QuantityForm>
          <Button color="secondary" onClick={handleAdd}>
            <AddIcon />
          </Button>
        </FormButton>
        <FormButton>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={handleBuy}>
            Comprar
          </Button>
        </FormButton>
      </Content>
    </Container>
  );
}
