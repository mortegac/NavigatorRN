// ____________________________________________________________________

// Error Text from common Library
// ____________________________________________________________________
import React from 'react';
import { View, Text } from 'react-native';


const _TitleText = ({ text, frColor }) => {
  const { TextStyle } = styles;

  return (
    <View>
      { text ? <Text style={ [
                                      TextStyle, { 
                                      color: (frColor? frColor: '#000') 
                                    }] }>{text}</Text> : null }
    </View>
  );
};

const styles = {
  TextStyle: {
    fontSize: 23,
    marginBottom: 10,
  },
};

export { _TitleText };
