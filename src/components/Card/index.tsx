import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import style from './styles';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({title, description}) => {
  return (
      <View style={style.container}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.description}>{description}</Text>

          <Feather name="arrow-right" size={24} color="black" style={{alignSelf:"flex-end"}}/>
      </View>
  );
}

export default Card;