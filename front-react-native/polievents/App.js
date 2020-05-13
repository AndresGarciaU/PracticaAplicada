import {createStackNavigator} from 'react-navigation-stack';
import Login from './assets/Screens/Login';
import Home from './assets/Screens/Home';
import registerFormat from './assets/Screens/registerFormat';
import { createAppContainer } from 'react-navigation';
import loadingScreen from './assets/Screens/loadingScreen';

const Navigator = createStackNavigator({
  Login:{
    screen:Login, 
    navigationOptions:{
      header:false
    }
  },
  Home:{
    screen:Home,
    navigationOptions:{
      header:false
    }
  },
  loadingScreen:{
    screen:loadingScreen,
    navigationOptions:{
      header:false
    }
  },
  registerFormat:{
    screen:registerFormat,
    navigationOptions:{
      header:false
    }
  }
});

const App= createAppContainer(Navigator);
export default App;