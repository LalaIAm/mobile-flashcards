import { DefaultTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#42B9D7',
    secondary: '#98D0D7',
    accent: '#E38271',
    background: '#E28255',
    surface: '#FAF9F7',
    text: '#282552',
    backdrop: '#FAF9F7',
  },
};

export default theme;

const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
    backgroundColor: '#98d0d7',
  },
  surface: {
    padding: 20,
    backgroundColor: '#faf9f7',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    margin: 20,
  },
  headline: {
    textAlign: 'center',
  },
  subheading: {
    color: '#e38271',
  },
});

export { gStyles };
