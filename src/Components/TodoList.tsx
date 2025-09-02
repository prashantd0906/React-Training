import React from "react";
import type {TodoItem} from "../App";
import "./TodoList.css";

interface TodoListProps {
  index: number;
  item: TodoItem;
  deleteItem: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({index, item, deleteItem}) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>
        <button onClick={() => deleteItem(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoList;
