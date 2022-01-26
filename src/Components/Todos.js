import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheckDouble } from "react-icons/fa"

import "bootstrap/dist/css/bootstrap.min.css"

const Todos = ({ todos, markComplete }) => {

    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map((item) => (
                <ListGroupItem key={item.id}>
                    {item.todoString}
                    <span className="float-right"
                    style={{"float" : "right"}}
                    onClick={() => markComplete(item.id)}><FaCheckDouble />clear</span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos;