import React, {useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { TextField, Button, FormGroup } from "@mui/material";

// Import firebase configuration from firebase.ts file
import {db} from "../firebase";

export default function AddTodo() {
    const [title, setTitle] = useState("");


const handleSubmit = async(e: any) => {
    e.preventDefault();
    if (title !== "") {
        await addDoc<unknown>(collection(db, "todos"),{
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

