import React from 'react';
import { View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import miniLogo from '../../../assets/mini-logo.png'

const Header: React.FC = () => {
  return (
      <View style={{marginTop: 40, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          <Image source={miniLogo}/>
          <Feather name="menu" size={24} color="black" />
      </View>
  );
}

export default Header;