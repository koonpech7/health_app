import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../constant';

interface CardProps {
  children: React.ReactNode;
  header?: string;
}

export const Card: React.FC<CardProps> = props => {
  const {children, header} = props;

  return (
    <View style={styles.card}>
      {/* If a header prop is passed, display the blue header */}
      {header && (
        <View style={styles.header}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 16,
  },
  header: {
    backgroundColor: '#3C6CE7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
    height: 56,
  },
  headerText: {
    color: COLOR.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
});
