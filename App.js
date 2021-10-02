import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

function App(){
  return(

    <NavigationContainer>
       {/* routes here */}
       <Routes />
    </NavigationContainer>

  )
}

export default App;