import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheckDouble } from 'react-icons/fa'
import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";

const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext)
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map((e) => (
                <ListGroupItem key={e.id}>
                    {e.todoString}

                    <span className="float-right" style={{
                        float: "right"
                    }}
                        onClick={() => {
                            dispatch({
                                type: REMOVE_TODO,
                                payload: e.id
                            })
                        }}>
                        <FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))
            }
        </ListGroup >
    )
}

export default Todos;