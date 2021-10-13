import React from "react";
import ItemList from "../itemList/ItemList";
import { taggleTodo } from "../../store/redux/action/action";
import { connect } from "react-redux";

const List = ({ items, taggleTodo }) => {
  return (
    <div>
      <ul>
        {items.map((item, i) => {
          if (item.text) {
            return (
              <ItemList
                key={i}
                todo={item.text}
                ind={i}
                className={item.completed ? "done" : ""}
                onClick={() => taggleTodo(i)}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = (dispatch) => ({
  taggleTodo: (value) => dispatch(taggleTodo(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(List);
