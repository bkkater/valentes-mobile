import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import DayCard from '../../components/DayCard';
import Header from '../../components/Header';
import Apoio from '../../components/ActiveOption/Apoio';
import Contato from '../../components/ActiveOption/Contato';
import Duvidas from '../../components/ActiveOption/Dúvidas';

import style from './styles';
import { tailwind } from '../../lib/styles';
import MenuModal from '../../components/MenuModal';


const options = [
  {
    id: "01",
    name: "Apoio"
  },
  {
    id: "02",
    name: "Contatos"
  },
  {
    id: "03",
    name: "Dúvidas"
  }
]
const Home: React.FC = () => {
  const [activeOption, setActiveOption] = useState("01")
  const onChangeOption = (id: string) => {
    setActiveOption(id)
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <ScrollView style={style.container}>
      <Header onPress={handleModalVisible} />

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
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
          <Text style={style.text}>ver agenda</Text>
          <Feather name="arrow-right" size={18} color="black" style={{ marginTop: 2 }} />
        </View>
      </TouchableHighlight>

      <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 30, width: '100%', justifyContent: 'space-around', flex: 1 }}>
        {options.map(option => (
          <TouchableHighlight key={option.id} underlayColor="#F3EDE0" onPress={() => onChangeOption(option.id)} style={tailwind(`rounded-lg px-4 py-2 ${activeOption === option.id ? "bg-yellow-custom" : ""}`)}>
            <Text style={[style.buttomText, tailwind(`${activeOption === option.id ? "text-yellow-700" : "text-black"}`)]} >{option.name}</Text>
          </TouchableHighlight>
        ))}
      </View>
      <View>
        {activeOption === "01" ? (
          <Apoio />
        ) : activeOption === "02" ? (
          <Contato />
        ) : (
              <Duvidas />
            )}
      </View>

      {modalVisible && (
        <MenuModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      )}

    </ScrollView>
  );
}

export default Home;