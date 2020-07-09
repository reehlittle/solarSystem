import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';

export default (reducers) => {
  const persisteReducer = persistReducer(
    {
      key: 'mobile',
      storage: AsyncStorage,
      whitelist: ['auth', 'config', 'language'],
      stateReconciler: autoMergeLevel2,
    },
    reducers,
  );

  return persisteReducer;
};
