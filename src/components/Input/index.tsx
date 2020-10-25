import * as React from 'react';
import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

interface InputProps {
    label: string,
    type: string,
    keyboardtype: string,
    maxlength: number,
    style?: StyleProp<ViewStyle>
    mockValue?: string
}

const Input: React.FC<InputProps> = ({ label, mockValue, type, keyboardtype, maxlength, style }, props) => {
    const [value, setValue] = useState('');
    const { colors } = useTheme();

    return (
        <TextInput
            {...props}
            label={label}
            theme={colors.primary === "#fff"}
            value={mockValue || value}
            underlineColorAndroid="#fefe"
            onChangeText={value => setValue(value)}
            style={[{ backgroundColor: colors.text + "00", marginBottom: 20 }, style]}
            underlineColor='#B66604'
            textContentType={type}
            keyboardType={keyboardtype}
            secureTextEntry={type == 'password' ? true : false}
            maxLength={maxlength}
        />
    );
}

export default Input;