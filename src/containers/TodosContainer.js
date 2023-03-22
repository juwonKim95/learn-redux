import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
    //useSelector로 상태에서 필요한 속성 값 반환
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    //아래를 추가한것과 같다!(함수호출)
    // {
    //     type : ADD_TODO,
    //     todo : {
    //         id:nextId++,  //새항목 추가하고 nextid값을 1을 더해줌
    //         text:text
    //     }
    // }
    return (
        <div>
            <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
        </div>
    );
};

export default TodosContainer;