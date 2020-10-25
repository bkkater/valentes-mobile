import React, { Dispatch, SetStateAction } from 'react';
import { Modal, View, Image, Text, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

import logo from '../../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';

interface MenuModalProps {
  readonly modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

const MenuModal: React.FC<MenuModalProps> = ({ modalVisible, setModalVisible }) => {
  const { navigate } = useNavigation();

  function handleNavigateToLanding() {
    setModalVisible(!modalVisible)
    navigate('Landing')
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={[style.centeredView, { backgroundColor: "rgba(0,0,0,0.15)" }]}>
        <View style={style.modalView}>
          <Image source={logo} style={{ marginTop: 20, alignSelf: 'center', width: '80%', height: '20%', marginBottom: 20 }} />

          <View style={style.menuItem}>
            <Feather name="settings" size={24} color="black" />
            <Text style={style.menuText}>Configurações</Text>
          </View>

          <View style={style.menuItem}>
            <Feather name="help-circle" size={24} color="black" />
            <Text style={style.menuText}>Ajuda</Text>
          </View>

          <View style={style.hr} />

          <TouchableHighlight underlayColor="#F3EDE0" onPress={handleNavigateToLanding}>
            <View style={style.menuItem}>
              <Feather name="log-out" size={24} color="black" />
              <Text style={style.menuText}>Sair</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#F3EDE0" onPress={() => setModalVisible(!modalVisible)} style={{ marginTop: '170%' }}>
            <View style={style.menuItem}>
              <Feather name="arrow-left" size={24} color="black" />
              <Text style={style.menuText}>Fechar</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
    ;
}

export default MenuModal;