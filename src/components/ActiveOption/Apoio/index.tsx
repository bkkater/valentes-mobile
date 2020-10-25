import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';
import illustration from '../../../../assets/illustration.png'


const Apoio: React.FC = () => {
    return (
        <View>
            <View style={{ ...style.primaryContainer }}>

                <Text style={style.primaryContainerTitle}>Dicas</Text>
                <Text style={style.primaryContainerDescription}>Informe-se sobre o seu diagnóstico, direitos e outras dicas sobre qualidade de vida</Text>

                <Feather name="arrow-right" size={18} color="#B66604" style={{ alignSelf: 'flex-end' }} />
                <View style={style.hr} />

                <Text style={{ ...style.primaryContainerTitle, marginTop: 10 }}>Inspire-se</Text>
                <Text style={style.primaryContainerDescription}>Conheça histórias incríveis de quem já se curou</Text>

                <Feather name="arrow-right" size={18} color="#B66604" style={{ alignSelf: 'flex-end' }} />
                <View style={style.hr} />

            </View>
            <Image source={illustration} style={{marginTop: -180}}/>
        </View>

    );
}

export default Apoio;