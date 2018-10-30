import React from 'react';
import TodoItem from './TodoItem';

export const ToDo = (props) => {
    return (
        <div>
            {props.todos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} />;
            })}
        </div>
    )
}
export default ToDo;
