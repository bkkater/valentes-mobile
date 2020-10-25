import * as React from 'react';
import { useState } from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';

interface InputProps {
    label: string,
    type: string,
    keyboardtype: string,
    maxlength: number,
}

const Input: React.FC<InputProps> = ({ label, type, keyboardtype, maxlength }, props) => {
    const [value, setValue] = useState('');
    const { colors } = useTheme();

    return (
        <TextInput
            {...props}
            label={label}
            value={value}
            onChangeText={value => setValue(value)}
            style={{ backgroundColor: colors.text + "00", marginBottom: 20}}
            underlineColor= '#B66604'
            textContentType= {type}
            keyboardType={keyboardtype}
            secureTextEntry={type== 'password' ? true : false}
            maxLength= {maxlength}
        />
    );
}

export default Input;