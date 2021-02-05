import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김규섭',
    'birthday': '950314',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이규섭',
    'birthday': '950314',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '박규섭',
    'birthday': '950314',
    'gender': '남자',
    'job': '대학생'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => { return (< Customer key={c.id} {...c} />); })}
      </div>
    );
  }
}

export default App;
