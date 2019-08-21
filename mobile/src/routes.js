import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/Signin';
import SignUp from '~/pages/Signup';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp
    })
);
