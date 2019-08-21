import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';

export default createAppContainer(
    createBottomTabNavigator({
        Signin,
        Signup
    })
);
