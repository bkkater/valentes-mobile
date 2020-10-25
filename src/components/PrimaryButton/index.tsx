import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import style from './styles';

const PrimaryButton: React.FC = () => {
    const { navigate } = useNavigation();
    
    function handleNavigateToHome() {
        navigate('Home')
    }
    
    return (
        <TouchableHighlight style={style.button} onPress={handleNavigateToHome} underlayColor="#ecbc63">
            <Text style={style.buttonText}>Continuar</Text>
        </TouchableHighlight>
    );
}

export default PrimaryButton;