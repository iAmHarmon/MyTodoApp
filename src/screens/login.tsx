import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const LoginScreen = ({ navigation }) => (
  <View>
    <Text>"Login Screen"</Text>
    <Button
      title="Go to list"
      onPress={() => {
        navigation.navigate('List');
      }}
    />
  </View>
);
