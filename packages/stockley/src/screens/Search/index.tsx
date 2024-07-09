import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Header';
import PossibleMatches from './PossibleMatches';
import SearchScreen from './Search';
import ProductDetail from './productDetail';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: true, headerBackTitleVisible: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Possible Matches" component={PossibleMatches} />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetail}
        options={{
          headerShown: true,
          headerTitle: props => (
            <Header {...props} routeName={'Product Detail'} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
