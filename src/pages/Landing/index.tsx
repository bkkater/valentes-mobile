import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Input from '../../components/Input';
import HelpContainer from '../../components/HelpContainer';

import style from './styles'

import logo from '../../assets/logo.png'
import miniLogo from '../../assets/mini-logo.png'



function Landing() {
    const [modalVisible, setModalVisible] = useState(false);
    const {goBack} = useNavigation();

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

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleModalVisible}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Image source={miniLogo} />
                        <View>

                            <Text style={style.contentText}>Acessar</Text>
                            <View style={style.inputContainer}>
                                <Input
                                    label='Digite o código do paciente'
                                    type='none'
                                    keyboardtype='number-pad'
                                    maxlength={6}
                                />
                                <Feather name="hash" size={24} style={{ ...style.icon, bottom: 30 }} color='#F2B441' />
                            </View>

                            <View style={{...style.inputContainer, flexDirection:'row'}}>
                                <Input
                                    label='Data de nascimento do paciente'
                                    type='none'
                                    keyboardtype='default'
                                    maxlength={6}
                                />
                                <View style={style.iconContainer}>
                                    <Feather name="calendar" size={24} color='white' />
                                </View>

                            </View>

                            {/* Colocar o Date Picker */}

                            {/* Colocar outro Date Picker */}
                        </View>


                        <View style={style.buttons}>
                            <TouchableHighlight style={style.goBackButton} onPress={handleModalVisible}>
                                <Text style={{ ...style.buttonText, color: '#333' }}>Voltar</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={style.button}>
                                <Text style={style.buttonText}>Continuar</Text>
                            </TouchableHighlight>
                        </View>


                    </View>
                </View>
            </Modal>

        </View>
    );
}

export default Landing;