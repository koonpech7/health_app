import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {
  DeliveryOptions,
  HeaderBar,
  Location,
  OrderDetails,
  PaymentsType,
  StoreLocation,
  SummarizeOrder,
} from '../components';
import {COLOR} from '../constant';
import {OrderDetailsData} from '../mocks';
import {PAOTANG} from '../assets';
import BottomSheet from '@gorhom/bottom-sheet';

interface OerderingScreeProps {}

export const OerderingScreen: React.FC<OerderingScreeProps> = () => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const snapPoints = React.useMemo(() => ['32%'], []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderBar title="คำสั่งซื้อ" />
      <ScrollView style={styles.container}>
        <View style={{paddingBottom: 280}}>
          <Location data={OrderDetailsData.orderLocation} />
          <DeliveryOptions />
          <StoreLocation data={OrderDetailsData.orderStore} />
          <OrderDetails data={OrderDetailsData} />
          <PaymentsType
            image={PAOTANG}
            paymentname={'เป๋าตัง'}
            onPress={undefined}
          />
        </View>
      </ScrollView>
      <BottomSheet
        handleIndicatorStyle={{backgroundColor: '#F1F1F1', width: 100}}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}>
        <SummarizeOrder data={OrderDetailsData.orderSumarize} />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    padding: 16,
  },
});
