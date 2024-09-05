import React from 'react';
import {Card} from './Card';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {PAOTANG} from '../../assets';
import {COLOR} from '../../constant';

interface PaymentsType {
  image: any;
  paymentname: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export const PaymentsType: React.FC<PaymentsType> = props => {
  const {image, paymentname, onPress} = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Card>
        <View style={styles.container}>
          <Image source={image} style={styles.icon} />
          <View style={styles.paymentDeatils}>
            <Text style={styles.selectPayment}>ช่องทางชำระเงิน</Text>
            <Text style={styles.subSelectPayment}>{paymentname}</Text>
          </View>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    width: 48,
    height: 48,
  },
  paymentDeatils: {
    justifyContent: 'center',
    paddingLeft: 16,
  },
  selectPayment: {
    fontWeight: '600',
    fontSize: 18,
    color: COLOR.textHardColor,
    fontFamily: 'NotoSansThai-Regular',
  },
  subSelectPayment: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.textSubColor,
    fontFamily: 'NotoSansThai-Regular',
  },
});
