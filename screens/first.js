import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();
import FirstPage from '../pages/Tintuc';
import SecondPage from '../pages/Hoctap';
import Giaitri from '../pages/Giaitri';
import Audiobook from '../pages/Audiobook';
import Thuvien from '../pages/Thuvien';

export default function first(){
    return(
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#F8F8F8',
          tabBarStyle: {
            backgroundColor: 'gray',
            
          },
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12
          },
          tabBarIndicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        }}>
        <Tab.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            tabBarLabel: 'Tin Tức',
          }}  />
        <Tab.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            tabBarLabel: 'Học tập',
          }} />

        <Tab.Screen
          name="Giaitri"
          component={Giaitri}
          options={{
            tabBarLabel: 'Giải trí',
          }} />
          <Tab.Screen
          name="Audiobook"
          component={Audiobook}
          options={{
            tabBarLabel: 'Audiobook',
          }} />
          <Tab.Screen
          name="Thuvien"
          component={Thuvien}
          options={{
            tabBarLabel: 'Thư viện',
          }} />
      </Tab.Navigator>
    )
}