import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";

import AppNavigator from "./src/config";
import theme from "./src/config/theme";
import { store, persistor } from "./src/config/store";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
