import {useState, SyntheticEvent} from "react";
import { collection, addDoc } from "firebase/firestore";
import { TextField } from "@mui/material";
import {db} from "../firebase";

function AddTodo() {
    const [title, setTitle] = useState("");

const handleSubmit = async(e:SyntheticEvent) => {
    e.preventDefault();
    if (title !== "") {
        await addDoc<any>(collection(db, "todos"),{
            title,
            completed: false,
        });
        setTitle("")
    }
};
return (
    <form onSubmit={handleSubmit}>
        <div className="input_container">
        <TextField type="text" id="standard-basic" label="Add a new task" variant="outlined" value={title} onChange= {(e:any) => setTitle(e.target.value)} />
        </div>
        </form>
);

}

export default AddTodo;
