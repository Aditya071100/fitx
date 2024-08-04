import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => onSelect(option)}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: option.value === selectedOption.value ? 'blue' : 'gray',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {option.value === selectedOption.value && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text style={{ marginLeft: 8 }}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Usage example:
export default RadioButton;
