import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLOR} from '../../constant';

interface OptionItemProps {
  icon: any;
  text: string;
  subtitle: string;
  price?: string;
  originalPrice?: string;
  isSelected: boolean;
  onPress: any;
  isExpress?: boolean;
}

const OptionItem: React.FC<OptionItemProps> = props => {
  const {
    icon,
    text,
    subtitle,
    price,
    originalPrice,
    isSelected,
    onPress,
    isExpress = false,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        isSelected && styles.optionContainerActive,
      ]}
      onPress={onPress}>
      <View style={styles.optionHeader}>
        <View style={styles.optionContent}>
          <View style={styles.iconWrapper}>
            <Image source={icon} style={styles.shippingIcon} />
          </View>
          <Text
            style={isSelected ? styles.optionText : styles.optionTextInactive}>
            {text}
          </Text>
          {isExpress && (
            <View style={styles.recommendView}>
              <Text style={styles.badge}>แนะนำ</Text>
            </View>
          )}
        </View>
        <View style={styles.radioButton}>
          {isSelected && <View style={styles.radioButtonSelected} />}
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text
          style={
            isSelected ? styles.optionSubtitle : styles.optionSubtitleInactive
          }>
          {subtitle}
        </Text>
        <View style={styles.priceWrapper}>
          {price && <Text style={styles.discountedPrice}>{price}</Text>}
          {originalPrice && (
            <Text style={styles.originalPrice}>{originalPrice}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    backgroundColor: COLOR.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: COLOR.background,
    height: 100,
    paddingTop: 13,
  },
  optionContainerActive: {
    borderColor: COLOR.buttonHardColor,
    borderWidth: 2,
    paddingBottom: 20,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    backgroundColor: COLOR.buttonSoftColor,
    padding: 10,
    borderRadius: 50,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR.textHardColor,
    fontFamily: 'NotoSansThai-Regular',
  },
  optionTextInactive: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR.textSubColor,
    fontFamily: 'NotoSansThai-Regular',
  },
  badge: {
    fontSize: 14,
    color: COLOR.white,
    fontWeight: '400',
    fontFamily: 'NotoSansThai-Regular',
  },
  recommendView: {
    backgroundColor: COLOR.buttonHardColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 25,
  },
  optionSubtitle: {
    fontSize: 14,
    color: COLOR.textSubColor,
    marginVertical: 4,
    fontFamily: 'NotoSansThai-Regular',
  },
  optionSubtitleInactive: {
    fontSize: 14,
    color: COLOR.textSubColor,
    marginVertical: 4,
    fontWeight: '400',
    fontFamily: 'NotoSansThai-Regular',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  priceWrapper: {
    flexDirection: 'row',
  },
  discountedPrice: {
    fontSize: 18,
    color: 'red',
    marginRight: 8,
    fontWeight: 'bold',
    fontFamily: 'NotoSansThai-Regular',
  },
  originalPrice: {
    fontSize: 18,
    color: COLOR.textSubColor,
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
    fontFamily: 'NotoSansThai-Regular',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CFCFCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: COLOR.buttonHardColor,
  },
  shippingIcon: {
    width: 20,
    height: 20,
  },
});

export default OptionItem;
