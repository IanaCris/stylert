import React from 'react';
import { Text } from 'react-native';

import { Container, Label, Description } from './styles';

import { ICardProps } from './interface';

const Card = ({ amount, status }: ICardProps) => {
  return (
    <Container>
      <Label>{amount}</Label>;
      <Description>{status}</Description>;
    </Container>
  );
};

export default Card;
