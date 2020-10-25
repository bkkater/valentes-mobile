import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

import illustration from '../../../../assets/illustration-3.png'
import Input from '../../Input';
import Card from '../../Card';

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
      <View style={{ height: 200 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card title='Watch and Wait: o que significa isso?' description='Após o paciente receber o diagnóstico, na maioria dos casos, é indicado que ele não dê início a nenhum tratamento...'/>
          <Card title='LMC é câncer? E quais os tratamentos?' description='Antes de mais nada, é importante destacar que a LMC é sim um câncer. Alguns médicos optam por utilizar o termo...'/>
        </ScrollView>
      </View>

      <Text style={{...style.title, marginTop: 30 }}>Não fique com dúvidas</Text>
      <View style={{ height: 200 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card title='O que é o PCR e para que ele serve?' description='O PCR é um exame realizado tanto para diagnosticar a LMC, quanto para identificar o estadiamento da...'/>
          <Card title='Eu posso parar de tomar o inibidor?' description='Existem estudos clínicos para a descontinuação dos inibidores após, pelo menos, três anos de tratamento...'/>
        </ScrollView>
      </View>

      <Text style={style.title}>Você precisa saber</Text>
      <View style={{ height: 200 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card title='O que é LMA e LLA?' description='LMA siginifica leucemia mieloide aguda e a leucemia linfóide aguda é representada pela sigla...'/>
          <Card title='Quais os melhores tratamentos pra leucemias agudas?' description='Existem estudos clínicos para a descontinuação dos inibidores...'/>
        </ScrollView>
      </View>

      <Image source={illustration} style={{marginTop: -220}}/>
    </View>
  );
}

export default Dúvidas;