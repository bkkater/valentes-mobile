import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import style from './styles';

interface PrimaryButtonProps {
    onPress(): void 
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress }) => {  
    return (
        <TouchableHighlight style={style.button} onPress={onPress} underlayColor="#ecbc63">
            <Text style={style.buttonText}>Continuar</Text>
        </TouchableHighlight>
    );
}

export default PrimaryButton;