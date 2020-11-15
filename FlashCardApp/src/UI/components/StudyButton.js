import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Fab, Text } from 'native-base';

import colors from "../styles/colors"
// trying out a pure functional component instead of a class
const StudyButton = (props) => (
  <View style={{ flex: 1 }}>
    <Fab
        active={false}
        style={[styles.fab, props.style]}
        position="bottomLeft"
        onPress={props.onPress}
    >
    </Fab>
    <Text>Study</Text>
  </View>
);

const styles = StyleSheet.create({
  fab: {
    backgroundColor: colors.pink2
  },
})

export default StudyButton