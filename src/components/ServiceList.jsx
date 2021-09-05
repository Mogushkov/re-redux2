import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, EditService } from "../actions/actionCreators";

function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (obj) => {
    const { id, name, price } = obj;
    dispatch(EditService(id, name, price));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id} className={o.show ? "li_item" : "hidden"}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;