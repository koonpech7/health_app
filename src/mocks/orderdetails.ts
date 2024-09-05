import {AVATAR, MEDICINES} from '../assets';

export const OrderDetailsData = {
  headBill: 'รายการยา (3) : TLHP-6505920001',
  typeOfbill: 'Refill',
  outOfbill: '24 ธันวาคม 2566',
  totalAmount: '150',
  amount: '3',
  medicines: [
    {
      id: '1',
      name: 'Cetirizine 10 mg Tablet (ZYRTEC)',
      price: '50.-',
      quantity: 'X1',
      image: MEDICINES,
    },
    {
      id: '2',
      name: 'Cetirizine 10 mg Tablet (ZYRTEC)',
      price: '50.-',
      quantity: 'X1',
      image: MEDICINES,
    },
    {
      id: '3',
      name: 'Cetirizine 10 mg Tablet (ZYRTEC)',
      price: '50.-',
      quantity: 'X1',
      image: MEDICINES,
    },
  ],
  orderLocation: {
    name: 'เทเลเฮลท์ ประเทศไทย',
    address:
      'EM-SPHERE-เอ็มสเฟียร์ : 12/37 หมู่6 เฟส1 ซอย5 บ้านฟ้า อ.ลำลูกกา จ.ปทุมธานี 12150, Thailand ',
    tell: '061-234-5678',
    note: 'มีต้นไม้หน้าบ้าน,ประตูเหล็ก',
  },
  orderStore: {
    storeName: 'ร้านขายยาไทยโอสถสันติสุข',
    storeLocation: 'สาขา สุขุมวิท',
    profileImage: AVATAR,
    name: 'ภก. วัชระ ตันศิริ',
    slug: '(ภ.25378)',
  },
  orderSumarize: {
    orderType: 'สิทธิประกันสุขภาพแห่งชาติ',
    totlePrice: 0,
    discount: 40,
    shippingPrice: 0,
    discountshippingPrice: 40,
  },
};
