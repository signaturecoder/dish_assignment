import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AnyAction, createStore, Store } from 'redux';
import { Provider as StoreProvider } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import db from './db.json';
import { STORAGE_KEY } from './constants/Constant';
import rootReducer, { AppState } from './redux/store/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store: Store<AppState, AnyAction> = createStore(rootReducer, composeWithDevTools())

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    // console.log('Db', db);
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(db))
        // Alert.alert('Data successfully saved')
      } catch (e) {
        Alert.alert('Failed to save the data to the storage')
      }
    }
    saveData();
  },[])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </StoreProvider>
    );
  }
}
