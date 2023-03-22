import React from 'react';

const TodoList = ({ todos, onToggle }) => {
    return (
        <ul>
            {todos.map(todo=><li key={todo.id} 
            onClick={()=>onToggle(todo.id)} 
            //style은 객체라서(자바스크립트) 괄호 두개됐다.
            style={{ textDecoration: todo.done ? 'line-through' : 'none'}}>
                {todo.text}</li>)}
        </ul>
    );
};

export default TodoList;