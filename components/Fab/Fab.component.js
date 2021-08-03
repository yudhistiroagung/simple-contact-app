import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Fab = ({ onPress }) => {

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 24,
        right: 16,
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e6e6e6',
        borderWidth: 1,
        elevation: 2
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 42,
          color: '#333333',
          textAlignVertical: 'center',
          fontWeight: '600',
          marginTop: -4
        }}
      >+</Text>
    </TouchableOpacity>
  );
};

export default Fab;