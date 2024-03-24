import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const FlagInput = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const options = ['Flag 1', 'Flag 2', 'Flag 3','Flag 4','Flag 5','Flag 6','Flag 7','Flag 8','Flag 9'
  ,'Flag 10','Flag 11','Flag 12','Flag 13','Flag 14','Flag 15'
  ,'Flag 16','Flag 17','Flag 18','Flag 19','Flag 20' ];

  const handleSelect = (option: React.SetStateAction<string>) => {
    setSelectedValue(option);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setShowDropdown(true)}>
        <Text>{selectedValue || 'Select a flag'}</Text>
      </TouchableOpacity>
      <Modal visible={showDropdown} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => handleSelect(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowDropdown(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
});

export default FlagInput;
