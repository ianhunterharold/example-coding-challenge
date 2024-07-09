import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SearchContext from '../../context/searchContext';

const PossibleMatches = ({ route, navigation }) => {
  const { bestMatches } = route.params;
  const { setSelectedStock, setTab } = useContext(SearchContext);

  return (
    <View className="flex-1 justify-start items-left">
      {bestMatches.length > 0 &&
        bestMatches.map((item, index) => {
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
              }}
              onPress={() => (
                setSelectedStock(item['1. symbol']),
                setTab('Product Detail'),
                navigation.navigate('Product Detail', {
                  product: item,
                })
              )}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{ flexDirection: 'column' }}>
                  <Text>{item['1. symbol']}</Text>
                  <Text>{item['2. name']}</Text>
                </View>
                <View className="flex-1 justify-end items-right"></View>
                <FontAwesome6
                  style={{ paddingRight: 10 }}
                  name="chevron-right"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          );
        })}
      {bestMatches.length === 0 && (
        <Text>There are no search results. Try a different ticker text.</Text>
      )}
    </View>
  );
};

export default PossibleMatches;
