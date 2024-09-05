import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../constant';

interface HeaderBarProps {
  title: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = props => {
  const {title} = props;
  return (
    <View style={styles.hederView}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hederView: {
    height: 64,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLOR.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
