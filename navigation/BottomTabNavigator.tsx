import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { userLogout } from '../redux/actions/loginActions';
import { AppState } from '../redux/store/rootReducer';
import CreatePollsScreen from '../screens/CreatePollsScreen';
import VotesScreen from '../screens/VotesScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="CreatePolls"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint
      }}>
      <BottomTab.Screen
        name="CreatePolls"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="wpforms" color={color} />,

        }}
      />
      <BottomTab.Screen
        name="Votes"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="vote-yea" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator({navigation} :any) {
  const dispatch = useDispatch();
  const loginState = useSelector((state:AppState) => state.loginState)
  const loggedUser = loginState.users && loginState.users.uname;
  console.log('loginSTate', loginState.users && loginState.users.uname);
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="CreatePollsScreen"
        component={CreatePollsScreen}
        options={{ headerTitle: `Welcome, ${loggedUser.toUpperCase()}`, 
        headerRight: () => <AntDesign name="logout" style={{ marginRight: 15}} size={24} color="black" onPress={() =>dispatch(userLogout())

        }/>
      }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator({navigation}: any ) {
  const dispatch = useDispatch();
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="VotesScreen"
        component={VotesScreen}
        options={{ headerTitle: 'Votes',
        headerRight: () => <AntDesign name="logout" style={{ marginRight: 15}} size={24} color="black" onPress={() =>dispatch(userLogout())}/>
      
      }}
      />
    </TabTwoStack.Navigator>
  );
}
