import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import style from './styles';

const Home: React.FC = () => {
  return (
    <View style={style.container}>
        <Header/>
    </View>
    );
}

export default Home;