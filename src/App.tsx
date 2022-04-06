import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import TestBox from './Components/TestBox/TestBox';
import TodoList from './Components/TodoList/TodoList';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="body">
        <Card />
        <TestBox />
        <TodoList />
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
