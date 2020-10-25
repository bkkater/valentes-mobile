import React from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import DayCard from '../../components/DayCard';
import Header from '../../components/Header';

import style from './styles';

const Home: React.FC = () => {
  return (
    <View style={style.container}>
      <Header />

      <Text style={style.title}>Compromissos</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <DayCard dayMonth={30} dayLabel='qui' examDay={true} />
          <DayCard dayMonth={31} dayLabel='sex' examDay={false} />
          <DayCard dayMonth={1} dayLabel='sab' examDay={false} />
          <DayCard dayMonth={2} dayLabel='dom' examDay={false} />
          <DayCard dayMonth={3} dayLabel='seg' examDay={false} />
          <DayCard dayMonth={4} dayLabel='ter' examDay={false} />
          <DayCard dayMonth={5} dayLabel='qua' examDay={false} />
          <DayCard dayMonth={6} dayLabel='qui' examDay={false} />
        </ScrollView>
      </View>

      <TouchableHighlight>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
          <Text style={style.text}>ver agenda</Text>
          <Feather name="arrow-right" size={18} color="black" />
        </View>
      </TouchableHighlight>

    </View>
  );
}

export default Home;