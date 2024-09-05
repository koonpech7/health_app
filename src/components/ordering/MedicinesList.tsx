import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {COLOR} from '../../constant';

interface MedicineListProps {
  data: any[];
}

export const MedicineList: React.FC<MedicineListProps> = props => {
  const {data} = props;

  const renderMedicineItem = ({item}: any) => (
    <View style={styles.medicineItem} key={item.id}>
      <Image source={item.image} style={styles.medicineImage} />
      <View style={styles.medicineDetails}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 185}}>
            <Text numberOfLines={2} style={styles.medicineName}>
              {item.name}
            </Text>
          </View>
          <View>
            <Text style={styles.medicinePrice}>{item.price}</Text>
            <Text style={styles.medicineQuantity}>{item.quantity}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      renderItem={renderMedicineItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  medicineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  medicineImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  medicineDetails: {
    flex: 1,
  },
  medicineName: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.textHardColor,
  },
  medicinePrice: {
    fontSize: 14,
    color: COLOR.buttonHardColor,
    fontWeight: 'bold',
  },
  medicineQuantity: {
    fontSize: 14,
    color: COLOR.textHardColor,
    alignSelf: 'flex-end',
  },
});
