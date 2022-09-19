import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import Home from './src/screens/Home';

function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
