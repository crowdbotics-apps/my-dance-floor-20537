import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile1105123Navigator from '../features/UserProfile1105123/navigator';
import SignUp12105122Navigator from '../features/SignUp12105122/navigator';
import EmailAuth3105121Navigator from '../features/EmailAuth3105121/navigator';
import Tutorial4105120Navigator from '../features/Tutorial4105120/navigator';
import UserProfile5105119Navigator from '../features/UserProfile5105119/navigator';
import Dashboard18105116Navigator from '../features/Dashboard18105116/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile1105123: { screen: UserProfile1105123Navigator },
SignUp12105122: { screen: SignUp12105122Navigator },
EmailAuth3105121: { screen: EmailAuth3105121Navigator },
Tutorial4105120: { screen: Tutorial4105120Navigator },
UserProfile5105119: { screen: UserProfile5105119Navigator },
Dashboard18105116: { screen: Dashboard18105116Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
