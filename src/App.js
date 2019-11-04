import React from 'react';
import logo from './logo.svg';
import './App.css';

function htmlReturn(){
  var arr = []
  for (var i = 0; i < 10; i++){
    arr.push(i)
  }
  console.log(arr)
  return arr
}

function App() {
  return (
    htmlReturn()
  );
}

export default App;
