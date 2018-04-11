import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map( 
            ({id, text, checked, color}) => (
                <TodoItem 
                    id={id} 
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                    color={color}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;


/*
    1. todos : todo 객체들이 비어있는 배열
       onToggle : 체크 활성화, 비활성화 함수
       onRemove : 리스트를 삭제 시키는 함수
*/