import React, { Component } from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {              // 비구조 할당 문법
    return (
        <main className="todo-list-template">               {/* 클래스를 줄때 className */}
            <div className="title">
                TODOLIST
            </div>
            <div className="form-wrapper">
                {form}
            </div>
            <div className="todos-wrapper">
                {children}
            </div>
        </main>
    );
};
export default TodoListTemplate;


/*

    1. CSS 를 import 할 때는 from 을 써주지 않아도 된다. 
    2. 함수형 컴포넌트는 prop를 파라미터로 가져온다.
    3. 비구조 할당 문법 사용으로 form, children 값을 파라미터로 가져온다.
    4. div 에 CSS Style 을 줄 때는 className 속성을 사용한다.
    5. .todo-list-template 구조 안에 .title / .form-wrapper / .todos-wrapper 컨테이너를 만든 후 
        form, children 값을 넣어준다.

*/