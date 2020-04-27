import React from 'react';
import { Link } from 'react-scroll';
import {
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  Container,
  UL,
  LI,
  ResponsiveToggle,
  ResponsiveImage,
} from './styles';
import ToggleButton from '../../assets/images/bullets.png';
import ResponsiveNavigation from '../ResponiveNavigation/index';

export default function Navigation() {
  const [responsiveMode, setResponsiveMode] = React.useState(true);
  const [showResponsiveNavigation, setShowResponsiveNavigation] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    setResponsiveMode(window.outerWidth < 768);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <UL showTopHeader={!responsiveMode}>
        <LI>
          <Link activeClass="active" to="home" spy smooth offset={0} duration={500}>
            Inicio
          </Link>
        </LI>
        <LI>
          <Link activeClass="active" to="products" spy smooth offset={0} duration={500}>
            Mais Vendidos
          </Link>
        </LI>
        <LI aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          Categorias
        </LI>
        <LI>
          <Link activeClass="active" to="contact" spy smooth offset={0} duration={500}>
            Contato
          </Link>
        </LI>
      </UL>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Frutas</MenuItem>
        <MenuItem onClick={handleClose}>Legumes</MenuItem>
        <MenuItem onClick={handleClose}>Outros</MenuItem>
      </Menu>
      <ResponsiveToggle showResponsiveMode={responsiveMode}>
        <ResponsiveImage src={ToggleButton} onClick={() => setShowResponsiveNavigation(!showResponsiveNavigation)} />
      </ResponsiveToggle>
      <ResponsiveNavigation show={showResponsiveNavigation} hideNavigation={setShowResponsiveNavigation} />
    </Container>
  );
}
