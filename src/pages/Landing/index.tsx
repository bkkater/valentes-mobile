import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { tailwind } from '~/lib/styles'

function Landing() {
    return (
        <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>
            <View style={tailwind('bg-red-500')}>
                <Text style={tailwind('text-primary-500')}>Teste</Text>
            </View>
        </SafeAreaView>
    );
}

export default Landing;