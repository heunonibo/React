import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    render() {
        const  { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)
                }}>
                    &times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;


/*
    1. text : todo 내용
       checked : 체크박스 상태
       id : todo 의 고유 아이디
       onToggle : 체크박스 활성, 비활성화 함수
       onRemove : 리스트를 삭제 시키는 함수
    2. e.stopPropagation() : 이벤트의 확산을 멈춤. (onToggle 은 실행되지 않고, onRemove만 실행)
    3. onClick={() => onToggle(id)} 로 쓰는 이유?
       onClick={onToggle(id)} <- 이와 같은 코드를 사용하면 해당 함수가 렌더링 될 때 호출이 된다.
       해당 함수가 호출되면 데이터가 변경되고, 데이터가 변경되면 리렌더링 되면서 무한반복된다.
    4. todo-text 에 유동적으로 checked 라는 문자열을 넣고 싶으면 템플릿 리터럴을 사용하면 된다.

       className={`todo-text ${checked && 'checked'}`} // checked가 true면 'checked' 문자열을 붙여라.
       className={"todo-text" + checked && 'checked'}  // 위와 같은 내용
       className={`todo-text ${ checked ? ' checked' : '' }`}  // checked가 false 일 때 결과값이 나타나니깐 이렇게도 써줄 수 있다.

    5.
*/
