import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import DayCard from '../../components/DayCard';
import Header from '../../components/Header';

import illustration from '../../../assets/illustration.png'

import style from './styles';

const Home: React.FC = () => {
  const [apoioActive, setApoioActive] = useState(true)
  const [contatosActive, setContatosActive] = useState(false)
  const [duvidasActive, setDuvidasoActive] = useState(false)

  return (
    <View style={style.container}>
      <Header />

      <Text style={style.title}>Compromissos</Text>

      <View style={{ height: 120 }}>
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
          <Feather name="arrow-right" size={18} color="black" style={{ marginTop: 2 }} />
        </View>
      </TouchableHighlight>

      <Image source={illustration} style={{ position: 'absolute', bottom: 10, zIndex: 1 }} />

      <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 30, width: '100%', justifyContent: 'space-between' }}>

        {/* {...style.activeButtonStyle, backgroundColor: '#F2E2C4',} */}
        <TouchableHighlight>
          <Text style={style.buttomText}>Apoio</Text>
        </TouchableHighlight>
        
        <TouchableHighlight >
          <Text style={style.buttomText}>Apoio</Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.activeButtonStyle}>
          <Text style={style.buttomText}>Contatos</Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.activeButtonStyle}>
          <Text style={style.buttomText}>Dúvidas</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Home;