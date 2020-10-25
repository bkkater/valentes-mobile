import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

import illustration from '../../../../assets/illustration-2.png'

const Contato: React.FC = () => {
    return (
        <View>
            <View style={{marginTop: -15}}>
              <Text style={style.primaryContainerTitle}>Você não está sozinho(a)!</Text>
              <Text style={{...style.primaryContainerDescription, marginBottom: 20, fontSize: 14}}>Faça contatos, isso ira lhe ajudar e você pode ajudar o tratamento a ter mais sucesso, além também de ajudar outros.</Text>
            </View>

            <View style={{ ...style.primaryContainer }}>
              <Text style={style.primaryContainerTitle}>Outros pais e reponsáveis</Text>

              <Feather name="arrow-right" size={18} color="#B66604" style={{ alignSelf: 'flex-end', marginTop: -5 }} />
              <View style={style.hr} />

            </View>

            <View style={{ ...style.primaryContainer, marginTop: 10 }}>
              <Text style={style.primaryContainerTitle}>Oncologistas</Text>

              <Feather name="arrow-right" size={18} color="#B66604" style={{ alignSelf: 'flex-end', marginTop: -5 }} />
              <View style={style.hr} />

            </View>

            <View style={{ ...style.primaryContainer, marginTop: 10 }}>
              <Text style={style.primaryContainerTitle}>Hospitais e centros de tratamento</Text>

              <Feather name="arrow-right" size={18} color="#B66604" style={{ alignSelf: 'flex-end', marginTop: -5 }} />
              <View style={style.hr} />
            </View>
            <Image source={illustration} style={{marginTop: -220}}/>
          </View>
    );
}

export default Contato;