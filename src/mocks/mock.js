import plate from '../assets/image/icons/plate.svg';
import garbage from '../assets/image/icons/garbage.svg';
import sprout from '../assets/image/icons/sprout.svg';
import noMeat from '../assets/image/icons/no-meat.svg';

const advantagesList = [
  {
    id: 0,
    title: 'Еда намного вкуснее',
    text: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
    image: plate,
    type: 'farmer'
  },
    {
    id: 1,
    title: 'Просроченные продукты',
    text: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
    image: garbage,
    type: 'shop'
  },
    {
    id: 2,
    title: 'Натуральные продукты',
    text: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
    image: sprout,
    type: 'farmer'
  },
    {
    id: 3,
    title: 'Некачественное мясо',
    text: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
    image: noMeat,
    type: 'shop'
  }
];

export default advantagesList;