import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Landing from '../pages/Landing';
import AppLoading from '../pages/AppLoading';
import Home from '../pages/Home';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />
                <Screen name="AppLoading" component={AppLoading} />
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;