import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';

import style from './styles';

const Home: React.FC = () => {
  return (
    <View style={style.container}>
        <Header/>

        <Text>Compromissos</Text>

        <ScrollView>

        </ScrollView>
    </View>
    );
}

export default Home;