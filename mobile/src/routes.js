import {
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import SignIn from '~/pages/Signin';
import SignUp from '~/pages/Signup';
import Dashboard from '~/pages/Dashboard';

export default (isSigned = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                    SignUp
                }),
                App: createBottomTabNavigator({
                    Dashboard
                })
            },
            {
                initialRouteName: isSigned ? 'App' : 'Sign'
            }
        )
    );
