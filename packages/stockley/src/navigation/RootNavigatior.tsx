import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComparisonScreen from '../screens/Comparison';
import FavoritesScreen from '../screens/Favorites';
import Header from '../screens/Header';
import History from '../screens/History';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootNavigator = () => {
  const SearchStackNavigation = ({ navigation }) => {
    return (
      <Stack.Navigator
        initialRouteName="Search Companies1"
        screenOptions={{ headerMode: 'screen' }}>
        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: props => (
              <Header
                {...props}
                navigation={navigation}
                routeName={'Search Companies'}
              />
            ),
          }}
          name="Search Companies"
          component={SearchScreen}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SearchStack"
        screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="SearchStack"
          component={SearchStackNavigation}
          options={{
            headerShown: false,
            // headerTitle: props => (
            //   <Header {...props} routeName={'Search Companies'} />
            // ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            headerShown: true,
            headerTitle: 'Favorites',
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerShown: true,
            headerTitle: 'History',
          }}
        />
        <Tab.Screen
          name="Compare"
          component={ComparisonScreen}
          options={{
            headerShown: true,
            headerTitle: 'Compare',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
