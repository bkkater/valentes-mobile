import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';
<<<<<<< HEAD
=======
import HelpContainer from '../../components/HelpContainer';
>>>>>>> d150e07a075743a9ba7e7b657e49262742931a25

import style from './styles'

import logo from '../../../assets/logo.png'
import LandingModal from '../../components/LandingModal';
<<<<<<< HEAD
import HelpContainer from '../../components/HelpContainer';
=======
>>>>>>> d150e07a075743a9ba7e7b657e49262742931a25

function Landing() {
    const [modalVisible, setModalVisible] = useState(false);

    function handleModalVisible() {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={style.container}>
            <View style={style.image}>
                <Image source={logo} style={{ alignSelf: 'center', width: '90%', height: '50%' }} />
            </View>
            <View style={style.content}>
                <Text style={style.contentText}>Acessar</Text>

                <TouchableHighlight onPress={handleModalVisible} underlayColor='transparent' style={{ justifyContent: 'center' }}>
                    <View style={style.inputContainer}>
                        <View style={style.hr} />
                        <Text style={style.placeholder}>Digite o código do paciente</Text>
                        <Feather name="hash" size={24} style={style.icon} color='#F2B441' />
                    </View>
                </TouchableHighlight>
                <HelpContainer />
            </View>
            <LandingModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
}

export default Landing;