import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { tailwind } from '../../lib/styles';
import LottieView from 'lottie-react-native';
import loading from '../../../assets/loading.json'

function AppLoading() {

    return (
        <SafeAreaView style={tailwind('flex-1 bg-primary-500')}>
            <View style={tailwind('flex-1 items-center justify-center')}>
                <Text style={tailwind('text-lg pb-16')}>Carregando</Text>
                <LottieView
                    style={tailwind('-mb-16')}
                    source={loading}
                    autoPlay
                    loop
                />
            </View>
        </SafeAreaView>
    );
}

export default AppLoading;