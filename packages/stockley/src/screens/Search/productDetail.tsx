import React from 'react';
import { Text, View } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{ flexDirection: 'column' }}>
      {Object.keys(product).length &&
        Object.entries(product).map(([key, val], index) => (
          <View key={index} className="w-full flex justify-start pt-10 pl-10">
            <Text>
              {key} {val}
            </Text>
          </View>
        ))}
    </View>
  );
};

export default ProductDetail;
