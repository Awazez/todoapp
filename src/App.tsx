import "./App.css";
import React from "react";
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import {collection,query,onSnapshot,doc,updateDoc,deleteDoc,} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState<any[]>([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray:any = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo:any, title:any) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo:any) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id:any) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className="App">
      <div className="wrapper">
      <div >
        <Title />
      </div>
      <div>
        <TodoForm />
      </div>
      <div className="controls">
      </div>
      <div className="todo_container">
        {todos.map((todo) => (<Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit}/>
        ))}
      </div>
    </div>
    </div>
  );
}
export default App;
