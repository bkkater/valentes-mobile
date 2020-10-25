import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

interface DayCardProps {
    dayMonth: number,
    dayLabel: string,
    examDay?: boolean
}

const DayCard: React.FC<DayCardProps> = ({ dayMonth, dayLabel, examDay }) => {
    if (examDay) {
        <View style={style.container}>
            <View style={style.header}>
                <Feather name="heart" size={24} color="black" />
                <Text>{dayLabel}</Text>
            </View>
            <Text>{dayMonth}</Text>
        </View>
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Feather name="heart" size={24} color="transparent" />
                <Text>{dayLabel}</Text>
            </View>
            <Text>{dayMonth}</Text>
        </View>
    )

}

export default DayCard;