import * as React from 'react';
import { TextInput, useTheme } from 'react-native-paper';

interface InputProps {
    label: string,
    type: string
}

const Input: React.FC<InputProps> = ({ label, type }, props) => {
    const [value, onChangeText] = React.useState('');
    const { colors } = useTheme();

    return (
        <TextInput
            {...props}
            label={label}
            value={value}
            // onChangeText={text => onChangeText(text)}
            style={{ backgroundColor: colors.text + "00", marginBottom: 20 }}
            textContentType={type}
            secureTextEntry={type== 'password' ? true : false}
        />
    );
}

export default Input;