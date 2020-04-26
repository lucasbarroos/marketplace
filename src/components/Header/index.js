import React from 'react';
import {
  HeaderContainer,
  HeaderElement,
  HeaderTexts,
  HeaderTitle,
  HeaderSubtitle,
  Shadow,
  Fruits,
} from './styles';

const FruitsImage = 'https://images.freeimages.com/images/large-previews/2ff/fruit-1329110.jpg';

export default function Header() {
  return (
    <HeaderContainer id="home" name="home">
      <HeaderElement>
        <HeaderTexts>
        <HeaderTitle>Health Market</HeaderTitle>
          <HeaderSubtitle>Order your fruits and receive at home!</HeaderSubtitle>
        </HeaderTexts>
        <Shadow />
        <Fruits style={{backgroundImage: `url(${FruitsImage})`}}/>
      </HeaderElement>      
    </HeaderContainer>
  );
}
