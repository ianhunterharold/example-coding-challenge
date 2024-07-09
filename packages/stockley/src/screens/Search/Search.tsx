import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import SearchContext from '../../context/searchContext';

const SearchScreen = () => {
  const navigation = useNavigation();
  const { setInputValue, setSearchHistory, searchHistory, inputValue } =
    useContext(SearchContext);

  const mockVals = {
    bestMatches: [
      {
        '1. symbol': 'APPLX',
        '2. name': 'APPLESEED FUND INVESTOR CLASS',
        '3. type': 'Mutual Fund',
        '4. region': 'United States',
        '5. marketOpen': '09:30',
        '6. marketClose': '16:00',
        '7. timezone': 'UTC-04',
        '8. currency': 'USD',
        '9. matchScore': '0.8889',
      },
      {
        '1. symbol': 'AGPL',
        '2. name': 'Apple Green Holding Inc',
        '3. type': 'Equity',
        '4. region': 'United States',
        '5. marketOpen': '09:30',
        '6. marketClose': '16:00',
        '7. timezone': 'UTC-04',
        '8. currency': 'USD',
        '9. matchScore': '0.7500',
      },
      {
        '1. symbol': 'APLE',
        '2. name': 'Apple Hospitality REIT Inc',
        '3. type': 'Equity',
        '4. region': 'United States',
        '5. marketOpen': '09:30',
        '6. marketClose': '16:00',
        '7. timezone': 'UTC-04',
        '8. currency': 'USD',
        '9. matchScore': '0.7500',
      },
      {
        '1. symbol': 'AAPL',
        '2. name': 'Apple Inc',
        '3. type': 'Equity',
        '4. region': 'United States',
        '5. marketOpen': '09:30',
        '6. marketClose': '16:00',
        '7. timezone': 'UTC-04',
        '8. currency': 'USD',
        '9. matchScore': '0.7500',
      },
      {
        '1. symbol': 'AAPL34.SAO',
        '2. name': 'Apple Inc',
        '3. type': 'Equity',
        '4. region': 'Brazil/Sao Paolo',
        '5. marketOpen': '10:00',
        '6. marketClose': '17:30',
        '7. timezone': 'UTC-03',
        '8. currency': 'BRL',
        '9. matchScore': '0.6154',
      },
      {
        '1. symbol': 'APC.DEX',
        '2. name': 'Apple Inc',
        '3. type': 'Equity',
        '4. region': 'XETRA',
        '5. marketOpen': '08:00',
        '6. marketClose': '20:00',
        '7. timezone': 'UTC+02',
        '8. currency': 'EUR',
        '9. matchScore': '0.6154',
      },
      {
        '1. symbol': 'APC.FRK',
        '2. name': 'Apple Inc',
        '3. type': 'Equity',
        '4. region': 'Frankfurt',
        '5. marketOpen': '08:00',
        '6. marketClose': '20:00',
        '7. timezone': 'UTC+02',
        '8. currency': 'EUR',
        '9. matchScore': '0.6154',
      },
      {
        '1. symbol': '500014.BSE',
        '2. name': 'Apple Finance Limited',
        '3. type': 'Equity',
        '4. region': 'India/Bombay',
        '5. marketOpen': '09:15',
        '6. marketClose': '15:30',
        '7. timezone': 'UTC+5.5',
        '8. currency': 'INR',
        '9. matchScore': '0.3200',
      },
      {
        '1. symbol': '48T.FRK',
        '2. name': 'APPLE HOSPITALITY REIT',
        '3. type': 'Equity',
        '4. region': 'Frankfurt',
        '5. marketOpen': '08:00',
        '6. marketClose': '20:00',
        '7. timezone': 'UTC+02',
        '8. currency': 'EUR',
        '9. matchScore': '0.3077',
      },
      {
        '1. symbol': '603020.SHH',
        '2. name': 'Apple Flavor Fragrance Group Company Ltd',
        '3. type': 'Equity',
        '4. region': 'Shanghai',
        '5. marketOpen': '09:30',
        '6. marketClose': '15:00',
        '7. timezone': 'UTC+08',
        '8. currency': 'CNY',
        '9. matchScore': '0.1818',
      },
    ],
  };

  const getCompanyDetail = async (inputValue: string) => {
    try {
      // const request = await fetch(
      //   `http://localhost:3001/companies/${inputValue}`,
      // );
      // const response = await request.json();
      // was stuck on typeerror from front end. Using mock data to show my ui features I built over the past 1.5 days.
      setSearchHistory([
        ...searchHistory,
        { search: [inputValue, new Date().toLocaleTimeString()] },
      ]);
      const bestMatches = mockVals.bestMatches;
      // hard coded response to see ui. Was stuck on specific typeerror front end message from backend
      // ran out of time.
      navigation.navigate('Possible Matches', {
        bestMatches: bestMatches,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="bg-white h-full w-full">
      <View className="h-full w-full flex justify-start pt-20 pb-10">
        <View className="flex items-center mx-5 space-y-4">
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput
              placeholder="Enter Ticker Symbol..."
              onChangeText={setInputValue}
            />
          </View>
          <View className="flex-row justify-center">
            <TouchableOpacity
              className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
              onPress={async () => await getCompanyDetail(inputValue)}>
              <Text className="text-xl font-bold text-white text-center">
                Look Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
