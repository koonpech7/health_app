import React from 'react';
import {Card} from '../global';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../constant';
import {HOME_ICON} from '../../assets';

interface LocationProps {
  data: any;
}

export const Location: React.FC<LocationProps> = props => {
  const {data} = props;
  return (
    <Card>
      <Text style={styles.shippingHeader}>สถานที่จัดส่ง</Text>
      <View style={styles.addressHeader}>
        <Image source={HOME_ICON} style={styles.icon} />
        <Text style={styles.addressTitle}>{data.name}</Text>
      </View>

      <View style={{paddingLeft: 35}}>
        <Text style={styles.addressText} numberOfLines={1}>
          {data.address}
        </Text>
        <Text style={styles.addressText}>{data.tell}</Text>
        <Text style={styles.addressText}>{data.note}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ที่อยู่ตั้งต้น</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ที่อยู่ปัจจุบัน</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLOR.white,
    borderRadius: 10,
    padding: 16,
    shadowColor: COLOR.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    fontFamily: 'NotoSansThai-Black',
  },
  addressText: {
    fontSize: 14,
    color: COLOR.textDetailsColor,
    marginBottom: 4,
    fontWeight: '400',
    fontFamily: 'NotoSansThai-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  button: {
    backgroundColor: COLOR.buttonSoftColor,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 12,
    color: COLOR.textButtonColor,
    fontWeight: '600',
    fontFamily: 'NotoSansThai-Regular',
  },
  shippingHeader: {
    fontSize: 14,
    marginVertical: 10,
    fontWeight: '400',
    fontFamily: 'NotoSansThai-Regular',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
