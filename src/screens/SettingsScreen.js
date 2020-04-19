import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Button, Title, Text, Switch } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { setNotification, clearNotification } from '../utils/notifications';
import { gStyles } from '../config/theme';
import { resetDecks, getDecks } from '../actions/decks';
import { connect } from 'react-redux';


const SettingsScreen = (props) => {
  const [notif, setNotif] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { resetDecks, getDecks } = props;

  const _onToggleNotif = () => {
    if (notif === true) {
      clearNotification();
      setNotif(false);
    } else {
      setNotif(true);
      showPicker();
    }
  };

  const showPicker = () => {
    setIsVisible(true);
  };

  const hidePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (time) => {
    console.warn('A time is chosen: ', time);
    setNotification(time);
    hidePicker();
  };

  const handleDelete = () => {
    resetDecks();
    getDecks();
  };

  return (
    <View style={gStyles.container}>
      <Surface style={gStyles.surface}>
        <Title style={gStyles.title}>Settings</Title>
        <Text style={styles.text}>Would you like to receive study reminders? </Text>
        <Switch style={styles.switch} value={notif} onValueChange={_onToggleNotif} />
        <View>
          <DateTimePickerModal
            isVisible={isVisible}
            mode="time"
            display="clock"
            value={new Date()}
            onConfirm={handleConfirm}
            onCancel={hidePicker}
            headerTextIOS="What time would you like to study?"
          />
        </View>
        <View style={styles.reset}>
          <Text style={styles.text}>Reset App?</Text>
          <Button style={styles.btn} mode="contained" onPress={handleDelete}>
            Delete All
          </Button>
        </View>
      </Surface>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetDecks: () => dispatch(resetDecks()),
    getDecks: () => dispatch(getDecks()),
  };
};

export default connect(null, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 30,
  },
  switch: {
    alignSelf: 'center',
  },
  btn: {
    marginTop: 20,
    marginBottom: 15,
    padding: 5,
    backgroundColor: '#e38271',
  },
});
