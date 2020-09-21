import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial4105120Navigator from '../features/Tutorial4105120/navigator';
import UserProfile5105119Navigator from '../features/UserProfile5105119/navigator';
import Dashboard18105116Navigator from '../features/Dashboard18105116/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
