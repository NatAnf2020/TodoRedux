import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../store/redux/action/action";

const ItemList = ({ todo, ind, deleteTodo, onClick, className }) => {
  return (
    <li className={className}>
      <span onClick={onClick}>{todo}</span>
      <button onClick={() => deleteTodo(ind)}>Delete</button>
    </li>
  );
};
const mapStateToProps = ({ text }) => ({
  text,
});
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
