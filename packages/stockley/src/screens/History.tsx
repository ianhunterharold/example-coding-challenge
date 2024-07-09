import { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SearchContext from '../context/searchContext';

const History = ({}) => {
  const { searchHistory } = useContext(SearchContext);
  return (
    <View className="w-full flex justify-start pt-10">
      <SafeAreaView>
        <ScrollView>
          {searchHistory.length > 0 &&
            searchHistory.map((item, index) => {
              let time = item.search[1];
              let searchVal = item.search[0];
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
                  onPress={f => f}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={{ flexDirection: 'column' }}>
                      <Text>{searchVal}</Text>
                      <Text>{time}</Text>
                    </View>
                    <View className="flex-0 justify-end items-right"></View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </SafeAreaView>

      {searchHistory.length === 0 && (
        <View className="flex-row justify-center">
          <Text>You have no history at this time</Text>
        </View>
      )}
    </View>
  );
};

export default History;
