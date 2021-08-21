import React from 'react';
import { } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Container, Name } from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps>
}

export function Accessory({ icon: Icon, name }: Props) {
  return (
    <Container>
      <Icon width={32} />
      <Name>{name}</Name>
    </Container>
  );
};