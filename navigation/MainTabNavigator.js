import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SavingsScreen from '../screens/SavingsScreen';
import DurationScreen from '../screens/Duration';
import AccountScreen from '../screens/Account';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import RegScreen from '../screens/Registration';
import NoticeScreen from '../screens/Notice';
import SetupCardScreen from '../screens/SetupCard';
import DashboardScreen from '../screens/Dashboard';
import GoalScreen from '../screens/GoalScreen';
import IndividualGoalScreen from '../screens/individualGoals';
import MySettingsScreen from '../screens/MySettings';
import HelpCenterScreen from '../screens/HelpCenter';



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});



const NavigatorStack = createStackNavigator({
  Home:{screen: HomeScreen},
  Savings:{screen:SavingsScreen},
  Duration:{screen:DurationScreen},
  Account:{screen: AccountScreen},
  SignUp:{screen: SignUpScreen},
  Login:{screen: LoginScreen},
  Registration:{screen:RegScreen},
  Notice:{screen:NoticeScreen},
  Setup:{screen:SetupCardScreen},
  Dashboard:{screen: DashboardScreen},
  Goal:{screen:GoalScreen},
  IndividualGoal: {screen:IndividualGoalScreen},
  mySettings:{screen:MySettingsScreen},
  helpCenter:{screen:HelpCenterScreen},
});

export default NavigatorStack;
