import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {WARNING_ICON} from '../../assets';
import {Card} from '../global';
import {COLOR} from '../../constant';
import {MedicineList} from './MedicinesList';

interface OrderDetailsProps {
  data: any;
}

export const OrderDetails: React.FC<OrderDetailsProps> = props => {
  const {data} = props;

  return (
    <Card header={data.headBill}>
      <View style={styles.expirationContainer}>
        <View style={styles.expirationNotice}>
          <Image source={WARNING_ICON} style={styles.icon} />

          <Text style={styles.expirationText}>คำสั่งซื้อจะหมดอายุใน</Text>
        </View>
        <Text style={styles.expirationTime}>23:50:58</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>วันที่ออกใบสั่งยา</Text>
          <Text style={styles.infoValue}>{data.outOfbill}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ประเภทใบสั่งยา</Text>
          <Text style={styles.infoValue}>{data.typeOfbill}</Text>
        </View>
      </View>

      <MedicineList data={data.medicines} />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>รวม {data.amount} รายการ</Text>
        <Text style={styles.totalAmount}>{data.totalAmount}.-</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  expirationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF6E0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F09E00',
    height: 60,
  },
  expirationNotice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expirationIcon: {
    fontSize: 18,
    color: '#F09E00',
    marginRight: 8,
    fontFamily: 'NotoSansThai-Regular',
  },
  expirationText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2A2A2A',
    fontFamily: 'NotoSansThai-Regular',
  },
  expirationTime: {
    fontSize: 16,
    color: '#F09E00',
    fontWeight: '500',
    fontFamily: 'NotoSansThai-Regular',
  },
  infoContainer: {
    backgroundColor: COLOR.white,
    paddingVertical: 10,
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  infoLabel: {
    fontSize: 14,
    color: COLOR.textHardColor,
    fontFamily: 'NotoSansThai-Regular',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.textHardColor,
    fontFamily: 'NotoSansThai-Regular',
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    backgroundColor: COLOR.white,
    borderRadius: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR.buttonHardColor,
    fontFamily: 'NotoSansThai-Regular',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR.buttonHardColor,
    fontFamily: 'NotoSansThai-Regular',
  },

  icon: {
    width: 36,
    height: 36,
    marginRight: 8,
  },
});
