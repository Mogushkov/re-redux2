import {nanoid} from 'nanoid';
import {ADD_SERVICE, FILTER_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000, show: true },
  {id: nanoid(), name: 'Замена дисплея', price: 25000, show: true},
  {id: nanoid(), name: 'Замена аккумулятора', price: 4000, show: true},
  {id: nanoid(), name: 'Замена микрофона', price: 2500, show: true},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { id, name, price } = action.payload;
      if (!id) {
        return [
          ...state,
          { id: nanoid(), name, price: Number(price), show: true },
        ];
      } else {
        return state.map((o) =>
          o.id !== id
            ? o
            : { id: id, name: name, price: Number(price), show: true }
        );
      }
    case REMOVE_SERVICE:
      const { id: idToRemove } = action.payload;
      return state.filter((service) => service.id !== idToRemove);
    case FILTER_SERVICE: {
      const { value } = action.payload;
      const filter_item = state.map((service) => {
        const name = service.name.toLowerCase();
        if (name.indexOf(value.toLowerCase()) !== -1) {
          return { ...service, show: true };
        }
        return { ...service, show: false };
      });
      return filter_item;
    }
    default:
      return state;
  }
}