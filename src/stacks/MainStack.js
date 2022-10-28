import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditNoteScreen';

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTintColor: '#FFF'
    }}>
        <MainStack.Screen name="List" component={ListScreen} />
        <MainStack.Screen name="Eidt" component={EditNoteScreen} />

    </MainStack.Navigator>
);