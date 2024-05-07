import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import About from './screens/About';
import Settings from './screens/Settings';  
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createStackNavigator();

function Layout() {
  
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
      </NavigationContainer>

    );
  }

export default Layout;