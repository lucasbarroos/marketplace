import React from 'react';
import {
  Grid,
  Button,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { Container, Title, ButtonForm } from './styles';
import ProductCard from '../ProductCard/index';
import ProductModal from '../ProductModal/index';

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
},
{
  name: 'Laranja',
  price: '0,30 R$/Unid',
  description: 'Docinha e macia, das fazendas do vale do sao francisco.',
  image: 'https://freshorganicos.com.br/wp-content/uploads/2015/09/FRESH_ImagemPadrao_HortiFruti_18_600x600.png',
},
{
  name: 'Banana Prata',
  price: '3,00 R$/Duzia',
  description: 'Doce e baratissima! Show demais em uma vitamina com farinha lactea!',
  image: 'https://superprix.vteximg.com.br/arquivos/ids/178630-600-600/Banana-Prata.png?v=636861955826400000',
}];

export default function Products() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  const handleClick = (product) => {
    setShowModal(true);
    setModalContent(product);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalContent({});
  };

  return (
    <Container id="products">
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} align="center">
          <Title>Mais Vendidos</Title>
        </Grid>
        {products.map((el) => (
          <Grid item lg={3} md={6} sm={12} xs={12} align="center" onClick={() => handleClick(el)}>
            <ProductCard fruit={el} />
          </Grid>
        ))}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 700,
          }}
        >
          <Fade in={showModal}>
            <ProductModal product={modalContent} onClose={handleClose} />
          </Fade>
        </Modal>
        <Grid item lg={12} md={12} sm={12} xs={12} align="center">
          <ButtonForm>
            <Button variant="contained" color="secondary">Ver Produtos</Button>
          </ButtonForm>
        </Grid>
      </Grid>
    </Container>
  );
}
