import {FAST_TUNDER_CON, TRUCK_BLUE_ICON} from '../assets';

export const deliveryOptions = [
  {
    id: 'express',
    icon: FAST_TUNDER_CON,
    text: 'จัดส่งทันใจ',
    subtitle: 'จะได้รับภายใน 2 ชั่วโมง',
    price: '฿0',
    originalPrice: '฿40',
    isExpress: true,
  },
  {
    id: 'postal',
    icon: TRUCK_BLUE_ICON,
    text: 'จัดส่งทางไปรษณีย์',
    subtitle: 'จะได้รับภายใน 2 ชั่วโมง',
    price: '฿300',
    isExpress: false,
  },
  // {
  //   id: 'postaldw',
  //   icon: TRUCK_BLUE_ICON,
  //   text: 'จัดส่งทางไปรษณีย์',
  //   subtitle: 'จะได้รับภายใน 2 ชั่วโมง',
  //   price: '฿300',
  //   originalPrice: '฿40',
  //   isExpress: true,
  // },
  // {
  //   id: 'postaasdwl',
  //   icon: TRUCK_BLUE_ICON,
  //   text: 'จัดส่งทางไปรษณีย์',
  //   subtitle: 'จะได้รับภายใน 2 ชั่วโมง',
  //   price: '฿300',
  //   isExpress: false,
  // },
  // {
  //   id: 'pgggggasostal',
  //   icon: TRUCK_BLUE_ICON,
  //   text: 'จัดส่งทางไปรษณีย์',
  //   subtitle: 'จะได้รับภายใน 2 ชั่วโมง',
  //   price: '฿300',
  //   isExpress: false,
  // },
];
