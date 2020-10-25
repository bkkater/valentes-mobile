import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import miniLogo from '../../../assets/mini-logo.png'

interface HeaderProps {
  onPress?(): void
}

const Header: React.FC<HeaderProps> = ({onPress}) => {
  return (
    <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
      <Image source={miniLogo} />

      <TouchableHighlight onPress={onPress} underlayColor="#F3EDE0">
        <Feather name="menu" size={35} color="black" />
      </TouchableHighlight>

    </View>
  );
}

export default Header;