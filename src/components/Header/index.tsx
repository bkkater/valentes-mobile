import React from 'react';
import { View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import illustration from '../../assets/illustration.png'

const Header: React.FC = () => {
  return (
      <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
          <Image source={illustration}/>
          <Feather name="menu" size={24} color="black" />
      </View>
  );
}

export default Header;