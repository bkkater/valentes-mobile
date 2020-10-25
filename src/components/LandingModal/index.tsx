import React, { Dispatch, SetStateAction, useState } from 'react'
import { Modal, StyleProp, TouchableHighlight, View, Text, ViewStyle, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../Input'
import miniLogo from '../../../assets/mini-logo.png'

import style from './styles'
import { tailwind } from '../../lib/styles';
import PrimaryButton from '../PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

interface LandingModalProps {
  readonly styles?: StyleProp<ViewStyle>
  readonly modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

const LandingModal: React.FC<LandingModalProps> = ({ styles, modalVisible, setModalVisible }) => {
  const { navigate } = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [actualDate, setActualDate] = useState(new Date(1598051730000))
  const [date, setDate] = useState({ paciente: '', medico: '' });
  const [typeDate, setTypeDate] = useState('')

  const handleNavigateToHome = () => {
    setModalVisible(!modalVisible)
    navigate('Home')
  }

  const onChangeDate = (_: any, selectedDate: Date) => {
    setActualDate(selectedDate)
    if (typeDate === 'paciente') {
      return setDate({ paciente: moment(actualDate).format('L'), medico: date.medico })
    }
    return setDate({ paciente: date.paciente, medico: moment(actualDate).format('L') })
  }

  const openDatePicker = (type: string) => {
    setTypeDate(type)
    setShowDatePicker(!showDatePicker)
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

              <TouchableHighlight onPress={() => openDatePicker('paciente')} underlayColor="#F3EDE0" >
                <View style={[{ ...style.inputContainer }, tailwind('flex-row justify-between items-center')]}>
                  <Input
                    label='Data de nascimento do paciente'
                    type='none'
                    keyboardtype='default'
                    maxlength={6}
                    mockValue={String(date.paciente)}
                    style={tailwind('w-10/12')}
                  />
                  <View style={style.iconContainer}>
                    <Feather name="calendar" size={24} color='white' />
                  </View>
                </View>
              </TouchableHighlight>


              <View style={[{ ...style.inputContainer }, tailwind('flex-row justify-between items-center')]}>
                <Input
                  label='Data de nascimento do responsável'
                  type='none'
                  keyboardtype='default'
                  maxlength={6}
                  mockValue={String(date.medico)}
                  style={tailwind('w-10/12')}
                />
                <TouchableHighlight onPress={() => openDatePicker('medico')} underlayColor="#ffc14f" style={style.iconContainer}>
                  <Feather name="calendar" size={24} color='white' />
                </TouchableHighlight>
              </View>

            </View>
            {showDatePicker && (
              <Modal
                animationType="slide"
                transparent
                visible={showDatePicker}
                onRequestClose={() => setShowDatePicker(!showDatePicker)}
              >
                <View style={tailwind('h-full justify-center px-4')}>
                  <View style={tailwind('bg-white rounded-lg')}>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={actualDate}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      // @ts-ignore
                      onChange={onChangeDate}
                    />
                    <View style={tailwind('items-center')}>
                      <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} style={tailwind('items-center mb-4 text-lg py-2 w-1/3 rounded bg-orange-custom')}>
                        <Text style={tailwind('text-white font-medium')}>Confirmar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
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
