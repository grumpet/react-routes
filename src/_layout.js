import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import About from './screens/About';


const Stack = createStackNavigator();

function Layout() {
  
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      </NavigationContainer>

    );
  }

export default Layout;