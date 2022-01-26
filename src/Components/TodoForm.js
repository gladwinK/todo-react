import React, { useState } from "react";
import { FormGroup, Input, InputGroup, Button, Form, Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import { v4 } from "uuid";

function TodoForm({ addTodos }) {
    const [todoString, setTodoString] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoString === "")
            return alert("Please fill some value");

        const todo = {
            todoString : todoString,
            id: v4()
        }
        addTodos(todo);

        setTodoString("")

    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Enter your TODO" value={todoString} onChange={e => setTodoString(e.target.value)}/>
                    <Button className="yellow"
                    >Add Todo</Button>

                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default TodoForm;