import React, { Component } from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
            <div className="create-button" onClick={onCreate}>추가</div>
        </div>
    );
}

export default Form;


/*
    1. value : 인풋의 내용
       onChange : 인풋 내용이 변경 될 때 실행 될 함수
       onCreate : 버튼이 클릭 될 때 실행 될 함수
       onKeyPress : 인풋에서 키를 입력할 때 실행되는 함수
                    ( Enter 키를 누를 때 onCreate 실행한 것처럼 하기 위해 사용 )

    2. 
*/