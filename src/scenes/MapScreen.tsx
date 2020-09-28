import React from 'react';
import {Text, View} from 'react-native';

type Props = {message: string};

const MapScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Map</Text>
  </View>
);

export default MapScreen;
