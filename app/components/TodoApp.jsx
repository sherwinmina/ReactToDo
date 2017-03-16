var React = require('react');
import * as Redux from 'react-redux';
var uuid = require('node-uuid');
var moment = require('moment');



import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';


var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
