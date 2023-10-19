import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const CategoryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChangeCategory = (value) => {
    setSelectedCategory(value);
  };

  return (
    <RNPickerSelect
      placeholder={{ label: 'Selecione uma categoria', value: null }}
      items={categories}
      onValueChange={(value) => handleChangeCategory(value)}
      style={{
        inputIOS: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 4,
          color: 'black',
          paddingRight: 30,
        },
        inputAndroid: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 4,
          color: 'black',
          paddingRight: 30,
        },
      }}
    />
  );
};

export default CategoryDropdown;
