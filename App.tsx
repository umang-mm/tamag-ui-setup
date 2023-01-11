import React, {Suspense} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Button, Stack, TamaguiProvider, Text} from 'tamagui';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import config from './tamagui.config';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <TamaguiProvider config={config}>
      <Suspense>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Stack margin={50}>
            <Text color={'red'}>Hello</Text>
          </Stack>
          <Button backgroundColor={'aqua'}>Working</Button>
        </SafeAreaView>
      </Suspense>
    </TamaguiProvider>
  );
};

// const styles = StyleSheet.create({});

export default App;
