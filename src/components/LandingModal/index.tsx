import React, { Dispatch, SetStateAction, useState } from 'react'
import { Modal, StyleProp, TouchableHighlight, View, Text, ViewStyle, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../Input'
import miniLogo from '../../../assets/mini-logo.png'

import style from './styles'
import { tailwind } from '../../lib/styles';
import PrimaryButton from '../PrimaryButton';
import { useNavigation } from '@react-navigation/native';

interface LandingModalProps {
  readonly styles?: StyleProp<ViewStyle>
  readonly modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

const LandingModal: React.FC<LandingModalProps> = ({ styles, modalVisible, setModalVisible }) => {
  const { navigate } = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(new Date(1598051730000));

  const handleNavigateToHome = () => {
    setModalVisible(!modalVisible)
    navigate('Home')
  }

  const onChangeDate = (event: any) => {
    console.warn("event", event)
    setDate(date)
  }

  return (
    <View style={styles}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Image source={miniLogo} style={tailwind('mt-4')} />
            <View style={tailwind('relative')}>

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

              <View style={[{ ...style.inputContainer }, tailwind('flex-row justify-between items-center')]}>
                <Input
                  label='Data de nascimento do paciente'
                  type='none'
                  keyboardtype='default'
                  maxlength={6}
                  style={tailwind('w-10/12')}
                />

                <TouchableHighlight onPress={() => setShowDatePicker(!showDatePicker)} underlayColor="#ffc14f" style={style.iconContainer}>
                  <Feather name="calendar" size={24} color='white' />
                </TouchableHighlight>
              </View>


              <View style={[{ ...style.inputContainer }, tailwind('flex-row justify-between items-center')]}>
                <Input
                  label='Data de nascimento do responsável'
                  type='none'
                  keyboardtype='default'
                  maxlength={6}
                  style={tailwind('w-10/12')}
                />
                <TouchableHighlight onPress={() => { }} underlayColor="#ffc14f" style={style.iconContainer}>
                  <Feather name="calendar" size={24} color='white' />
                </TouchableHighlight>
              </View>

            </View>
            {showDatePicker && (<DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={e => onChangeDate(e)}
            />
            )}

            <View style={style.buttons}>
              <TouchableHighlight underlayColor="#F3EDE0" style={style.goBackButton} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ ...style.buttonText, color: '#333' }}>Voltar</Text>
              </TouchableHighlight>

              <PrimaryButton onPress={handleNavigateToHome} />
            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}

LandingModal.displayName = 'LandingModal'

export default LandingModal
