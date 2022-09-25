import React ,{useState} from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import types from "../global/type"


interface IProps {
  todo: any;
  toggleComplete: any
  handleDelete: any
  handleEdit: any
}

function Todo({ todo, toggleComplete, handleDelete, handleEdit,}: IProps) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <div className="todo-box">      
      <input id="todo-input" style={{ textDecoration: todo.completed && "line-through" }}  type="text" value={todo.title === "" ? newTitle : todo.title} className="task-box" onChange={handleChange}/>
      <div className="todo-button">
        <button className="button-complete" onClick={() => toggleComplete(todo)}>
          <CheckCircleIcon id="i" />
        </button>
        <button className="button-edit" onClick={() => handleEdit(todo, newTitle)}>
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
        </div>
      </div>
    </div>
  );

}

export default Todo;