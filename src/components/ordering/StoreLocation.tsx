import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Card} from '../global';
import {CHAT_ICON, STORE_BLACK_ICON} from '../../assets';
import {COLOR} from '../../constant';

interface StoreLocationProps {
  data: any;
}

export const StoreLocation: React.FC<StoreLocationProps> = props => {
  const {data} = props;

  return (
    <Card>
      <View style={styles.storeInfoContainer}>
        <Image source={STORE_BLACK_ICON} style={styles.icon} />
        <View style={styles.storeDetails}>
          <Text style={styles.storeName}>{data.storeName}</Text>
          <Text style={styles.storeBranch}>{data.storeLocation}</Text>
        </View>
      </View>

      <View style={styles.pharmacistContainer}>
        <Image source={data.profileImage} style={styles.avatar} />
        <View style={styles.pharmacistDetails}>
          <Text style={styles.pharmacistName}>{data.name}</Text>
          <Text style={styles.pharmacistLicense}>{data.slug}</Text>
        </View>
        <TouchableOpacity style={styles.messageIcon}>
          <Image source={CHAT_ICON} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  storeInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F4FF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  storeDetails: {
    marginLeft: 15,
  },
  storeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLOR.textHardColor,
    fontFamily: 'NotoSansThai-Regular',
  },
  storeBranch: {
    fontSize: 12,
    color: COLOR.textSubColor,
    marginTop: 2,
    fontFamily: 'NotoSansThai-Regular',
  },
  pharmacistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginRight: 16,
  },
  pharmacistDetails: {
    flex: 1,
  },
  pharmacistName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#767676',
    fontFamily: 'NotoSansThai-Regular',
  },
  pharmacistLicense: {
    fontSize: 14,
    color: '#767676',
    marginTop: 4,
    fontFamily: 'NotoSansThai-Regular',
  },
  messageIcon: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
