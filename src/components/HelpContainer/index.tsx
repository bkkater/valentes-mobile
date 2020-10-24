import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import style from './styles';

const HelpContainer: React.FC = () => {
    return (
        <View style={style.container}>
            <Text>Preciso de ajuda ou não sei o código</Text>
            <Feather name="help-circle" size={24} color="#B4B4B4" />
        </View>
    );
}

export default HelpContainer;