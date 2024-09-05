import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card} from '../global';
import {COLOR} from '../../constant';
import {STORE_ICON, TRUCK_ICON} from '../../assets';
import OptionItem from './ShippingOption';
import {deliveryOptions} from '../../mocks/shippongoption';

interface DeliveryOptionsProps {}

export const DeliveryOptions: React.FC<DeliveryOptionsProps> = () => {
  const [selectedOption, setSelectedOption] = React.useState('express');

  const handleOptionPress = (optionId: string) => {
    setSelectedOption(optionId);
  };

  return (
    <Card>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButton}>
          <Image source={STORE_ICON} style={styles.icon} />
          <Text style={styles.toggleText}>รับที่ร้าน</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButtonActive}>
          <Image source={TRUCK_ICON} style={styles.icon} />
          <Text style={styles.toggleTextActive}>จัดส่ง</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      {deliveryOptions.map(option => (
        <OptionItem
          key={option.id}
          icon={option.icon}
          text={option.text}
          subtitle={option.subtitle}
          price={option.price}
          originalPrice={option.originalPrice}
          isSelected={selectedOption === option.id}
          onPress={() => {
            handleOptionPress(option.id);
          }}
          isExpress={option.isExpress}
        />
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#E8F4FF',
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
  },
  toggleButtonActive: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLOR.buttonHardColor,
    borderRadius: 8,
    flex: 1,
    height: 56,
    justifyContent: 'center',
  },
  toggleText: {
    fontSize: 18,
    color: COLOR.buttonHardColor,
    marginLeft: 8,
    fontFamily: 'NotoSansThai-Regular',
    fontWeight: '600',
  },
  toggleTextActive: {
    fontSize: 18,
    color: COLOR.white,
    marginLeft: 8,
    fontFamily: 'NotoSansThai-Regular',
    fontWeight: '600',
  },
  line: {
    height: 1,
    backgroundColor: '#CFCFCF',
    marginVertical: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
