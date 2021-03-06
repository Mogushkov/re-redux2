import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeServiceField, addService } from "../actions/actionCreators";

function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.id, item.name, item.price));
  };

  const handleCancel = (evt) => {
    evt.preventDefault();
    dispatch(changeServiceField('id', ''));
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ServiceAdd;