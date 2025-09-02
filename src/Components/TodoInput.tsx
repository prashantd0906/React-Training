import type {KeyboardEvent} from "react";
import React, {useState} from "react";
import "./TodoInput.css";

interface TodoInputProps {
  addList: (name: string, description: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({addList}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name.trim() !== "") {
      addList(name, description);
      setName("");
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Todo Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          if (name.trim() !== "") {
            addList(name, description);
            setName("");
            setDescription("");
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
