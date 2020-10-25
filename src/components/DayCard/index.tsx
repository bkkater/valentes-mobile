import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

interface DayCardProps {
    dayMonth: number,
    dayLabel: string,
    examDay: boolean
}

const DayCard: React.FC<DayCardProps> = ({ dayMonth, dayLabel, examDay }) => {
    if (examDay) {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Feather name="heart" size={14} color="white"/>
                    <Text style={{ ...style.dayLabel, marginLeft: 15 }}>{dayLabel}</Text>
                </View>
                <Text style={style.dayMonth}>{dayMonth}</Text>
            </View>
        )
    }
    return (
        <View style={{ ...style.container, backgroundColor: '#F2E2C4' }}>
            <View style={style.header}>
                <Feather name="heart" size={24} color="transparent" />
                <Text style={{ ...style.dayLabel, color: '#333' }}>{dayLabel}</Text>
            </View>
            <Text style={{ ...style.dayMonth, color: '#F28C0F' }}>{dayMonth}</Text>
        </View>
    )

}

export default DayCard;