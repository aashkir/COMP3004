import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Fab, Icon } from 'native-base';

import colors from "./../styles/colors"
// trying out a pure functional component instead of a class (remember comp 3007?)
const AddButton = (props) => (
    <Fab
        active={false}
        style={[styles.fab, props.style]}
        position="bottomRight"
        onPress={props.onPress}
    >
      <Icon name="add" />
    </Fab>
);

const styles = StyleSheet.create({
  fab: {
    backgroundColor: colors.pink2
  },
})

export default AddButton