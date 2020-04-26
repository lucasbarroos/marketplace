import React from 'react';
import { Link } from 'react-scroll';
import { Container, Elements, Label } from './styles';

export default function ResponsiveNavigation({ show, hideNavigation }) {
  return (
    <Container show={show}>
      <Elements>
        <Label>
          <Link activeClass="active" to="home" onClick={() => hideNavigation()} spy smooth offset={0} duration={500}>
            Home
          </Link>
        </Label>
        <Label>
          <Link activeClass="active" to="about" onClick={() => hideNavigation()} spy smooth offset={0} duration={500}>
            About
          </Link>
        </Label>
        <Label>
          <Link activeClass="active" to="contact" onClick={() => hideNavigation()} spy smooth offset={0} duration={500}>
            Contact
          </Link>
        </Label>
      </Elements>
    </Container>
  );
}
