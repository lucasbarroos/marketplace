import React from 'react';
import { Link } from 'react-scroll';
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

  React.useEffect(() => {
    setResponsiveMode(window.outerWidth < 768);
  }, []);

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
        <LI>
          <Link activeClass="active" to="contact" spy smooth offset={0} duration={500}>
            Contato
          </Link>
        </LI>
      </UL>
      <ResponsiveToggle showResponsiveMode={responsiveMode}>
        <ResponsiveImage src={ToggleButton} onClick={() => setShowResponsiveNavigation(!showResponsiveNavigation)} />
      </ResponsiveToggle>
      <ResponsiveNavigation show={showResponsiveNavigation} hideNavigation={setShowResponsiveNavigation} />
    </Container>
  );
}
