import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SearchContext from '../context/searchContext';

const FavoritesScreen = ({ navigation }) => {
  const { favorites, removeFavorite } = useContext(SearchContext);

  return (
    <View className="w-full flex justify-start pt-10">
      {favorites.length > 0 &&
        favorites.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                paddingLeft: 10,
                marginTop: 10,
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderColor: 'gray',
                // backgroundColor: 'purple',
              }}
              onPress={() => removeFavorite(item)}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{ flexDirection: 'column' }}>
                  <Text>{item}</Text>
                </View>
                <View className="flex-1 justify-end items-right"></View>
                <FontAwesome6
                  style={{ paddingRight: 10 }}
                  name="trash"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          );
        })}
      <View className="flex-row justify-center">
        {favorites.length === 0 && (
          <Text>You have no favorites at this time</Text>
        )}
      </View>
    </View>
  );
};

export default FavoritesScreen;
