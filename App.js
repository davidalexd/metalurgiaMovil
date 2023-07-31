import React from 'react';
import { SafeAreaView,StyleSheet,StatusBar } from 'react-native';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Routes/>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})