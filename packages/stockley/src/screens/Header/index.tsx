import { AntDesign } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SearchContext from '../../context/searchContext';

const Header = () => {
  const { selectedStock, tab, updateFavoriteStocks, favorites } =
    useContext(SearchContext);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>{tab === 'Product Detail' && selectedStock}</Text>
      <TouchableOpacity
        onPress={() => (
          setIsFavorite(!isFavorite), updateFavoriteStocks(!isFavorite)
        )}
        style={{
          paddingLeft: 15,
        }}>
        {favorites && favorites.includes(selectedStock) ? (
          <AntDesign name="heart" size={24} color="blue" />
        ) : (
          <AntDesign name="hearto" size={24} color="blue" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
