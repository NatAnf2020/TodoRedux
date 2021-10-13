import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/redux/action/action";

const FormInputs = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={text}
        placeholder="What needs to be accomplished today?"
        onChange={handleChange}
      />
    </form>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});
const mapStateToProps = ({ text }) => ({
  text,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInputs);
