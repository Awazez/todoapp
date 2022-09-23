import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { TextField, Button, FormGroup } from "@mui/material";

// Import firebase configuration from firebase.ts file
import {db} from "../firebase";

export default function AddTodo() {
    const [title, setTitle] = React.useState("");


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
    <FormGroup onSubmit={handleSubmit}>
        <div className="input_container">
        <TextField type="text" id="standard-basic" label="Add a new task" variant="outlined" value={title} onChange= {(e:any) => setTitle(e.target.value)} />
        </div>
            <div className="btn_container">
                <Button variant="outlined" onClick={handleSubmit}>Add</Button>
            </div>
        </FormGroup>
);

}

