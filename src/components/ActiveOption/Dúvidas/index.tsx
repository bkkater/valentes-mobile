import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

import illustration from '../../../../assets/illustration-3.png'
import Input from '../../Input';

const Dúvidas: React.FC = () => {
  return (
    <View>
      <View style={style.inputContainer}>
        <Input
          label='Pesquisar'
          type='none'
          keyboardtype='number-pad'
          maxlength={6}
        />
        <Feather name="search" size={24} style={{ ...style.icon, bottom: 35 }} color='#F2B441' />
      </View>

      <Text style={style.title}>Talvez você queira saber</Text>

      <Text style={style.title}>Não fique com dúvidas</Text>

      <Text style={style.title}>Você precisa saber</Text>

      <Image source={illustration}/>
    </View>
  );
}

export default Dúvidas;