import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PantallaInicio} from '../Pantallas/PantallaInicio';
import {DetallesPantalla} from '../Pantallas/DetallesPantalla';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pantalla"
        component={PantallaInicio}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detalles"
        component={DetallesPantalla}
        options={({route}) => ({
          title: route.params.movie.Title,
        })}
      />
    </Stack.Navigator>
  );
}
