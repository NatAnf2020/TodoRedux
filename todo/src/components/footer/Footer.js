import React, { useEffect } from "react";
import { deleteAll, persistTodos } from "../../store/redux/action/action";
import { connect } from "react-redux";

const Footer = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, []);

  return (
    <button onClick={() => deleteAll()} className="clearAll">
      Clear all
    </button>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos()),
});
export default connect(null, mapDispatchToProps)(Footer);
