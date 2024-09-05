import {BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../constant';

interface SummarizeOrderProps {
  data: any;
}

export const SummarizeOrder: React.FC<SummarizeOrderProps> = props => {
  const {data} = props;

  return (
    <BottomSheetView style={styles.contentContainer}>
      <Text style={styles.title}>สรุปคำสั่งซื้อ</Text>

      <View style={styles.row}>
        <Text style={styles.label}>ประเภทการชำระ:</Text>
        <Text style={styles.value}>{data.orderType}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>รวมการสั่งซื้อ:</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={styles.price}>{`฿${data.totlePrice}`}</Text>
          <Text style={styles.discountedPrice}>{`฿${data.discount}`}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>ค่าจัดส่ง:</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={styles.price}>{`฿${data.shippingPrice}`}</Text>
          <Text
            style={
              styles.discountedPrice
            }>{`฿${data.discountshippingPrice}`}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
          }}>
          <Text style={styles.confirmText}>ยืนยันชำระ</Text>
          <Text style={styles.confirmText}>{`${
            data.totlePrice + data.shippingPrice
          }`}</Text>
        </View>
      </TouchableOpacity>
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    backgroundColor: COLOR.white,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'NotoSansThai-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    color: COLOR.textSubColor,
    fontFamily: 'NotoSansThai-Regular',
  },
  value: {
    fontSize: 18,
    color: COLOR.textHardColor,
    fontWeight: '600',
    fontFamily: 'NotoSansThai-Regular',
  },
  price: {
    fontSize: 18,
    color: COLOR.red,
    fontFamily: 'NotoSansThai-Regular',
    fontWeight: '600',
  },
  discountedPrice: {
    fontSize: 18,
    color: COLOR.textSubColor,
    textDecorationLine: 'line-through',
    marginRight: 10,
    fontWeight: '600',
    fontFamily: 'NotoSansThai-Regular',
  },
  confirmButton: {
    backgroundColor: COLOR.buttonHardColor,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 15,
    height: 56,
  },
  confirmText: {
    fontSize: 18,
    color: COLOR.white,
    fontWeight: 'bold',
    fontFamily: 'NotoSansThai-Regular',
  },
});
