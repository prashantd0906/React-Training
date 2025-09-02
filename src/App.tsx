import React, {useState} from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export interface TodoItem {
  id: number;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [listTodo, setListTodo] = useState<TodoItem[]>([]);

  const addList = (inputText: string, description: string = "") => {
    if (inputText !== "" && description.trim() !== "") {
      const newTodo: TodoItem = {
        id: Date.now(),
        name: inputText,
        description: description,
      };
      setListTodo([...listTodo, newTodo]);
    }
  };

  const deleteList = (index: number) => {
    const newList = [...listTodo];
    newList.splice(index, 1);
    setListTodo(newList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO LIST</h1>
        <hr />

        <table className="todo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Descriptions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listTodo.map((listItem, i) => (
              <TodoList
                index={i}
                item={listItem}
                key={i}
                deleteItem={deleteList}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
