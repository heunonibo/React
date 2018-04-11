import React, { Component } from 'react';
import './index.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  id = 3      // 이미 0,1,2 가 존재하므로 3으로 설정
  state = {
    input: '',
    todos: [
      {id: 0, text: '리액트 소개', checked: false},
      {id: 1, text: '리액트 소개', checked: true},
      {id: 2, text: '리액트 소개', checked: false}
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  // 추가 버튼 클릭 시 
  handleCreate = () => {
    const { input, todos, color } = this.state;    // 생성 될 때마다 input, todos 상태 값을 변경
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false, 
        color
      })
    });
  }

  // 눌려진 Key가 Enter 면 handleCreate 호출
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id가 몇번째 아이템인지 찾음
    const index = todos.findIndex(todo => todo.id === id);  
    const selected = todos[index];      // 선택된 객체

    const nextTodos = [...todos];       // 배열을 복사

    // 기존 값을 복사하고, checked 값 넣기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    console.log(nextTodos);
    
    this.setState({
      todos: nextTodos
    });

  }

  handleRemove = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id) // 선택된 id가 제외된 배열을 만드는 코드
    });
  }


  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;     // 비구조화 할당 this.state.input 이렇게 안써도됑

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onChange={this.handleChange}
          onCreate={this.handleCreate}
          onKeyPress={this.handleKeyPress}
          color={color}
        />
      )}
      palette={(
        <Palette colors={colors} selected={color} onSelect={this.handleSelectColor}/>
      )}>
        <TodoItemList 
          todos={todos}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        />
      </TodoListTemplate>
    );
  }  
}

export default App;