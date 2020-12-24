import React from 'react';
//import { Text } from 'react-native';

import { Container, Labeliana, Description } from './styles';

import { ICardProps, CardStatus } from './interface';

const Card = ({ amount, status }: ICardProps) => {
  return (
    <Container>
      <Labeliana>{amount}</Labeliana>;
      <Description>{CardStatus[status]}</Description>;
    </Container>
  );
};

export default Card;
