import {
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

import SignIn from '~/pages/Signin';
import SignUp from '~/pages/Signup';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Subscription from '~/pages/Subscription';

export default (isSigned = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                    SignUp
                }),
                App: createBottomTabNavigator(
                    {
                        Dashboard,
                        Subscription,
                        Profile
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#fff',
                            inactiveTintColor: 'rgba(255,255,255,0.7)',
                            style: {
                                backgroundColor: '#22202C'
                            }
                        }
                    }
                )
            },
            {
                initialRouteName: isSigned ? 'App' : 'Sign'
            }
        )
    );
