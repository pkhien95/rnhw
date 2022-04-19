import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from 'navigation/RootNavigator';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import linkingOptions from 'navigation/linking';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApolloProvider client={client}>
      <NavigationContainer linking={linkingOptions}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
