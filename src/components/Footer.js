import React from 'react';
import { View, Button } from 'react-native';
import { VisibilityFilters } from '../actions/types';
import Toggle from './Toggle';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const Footer = () => (
  <View style={styles.wrapper}>
    <Toggle title="All" filter={SHOW_ALL}/>
    <Toggle title="Completed" filter={SHOW_COMPLETED}/>
    <Toggle title="Active" filter={SHOW_ACTIVE}/>
  </View>
);

const styles = {
  wrapper: {
    height: 60,
    backgroundColor: 'darkgray',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 20
  }
}

export default Footer;
