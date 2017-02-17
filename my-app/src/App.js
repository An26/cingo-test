import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import IncrementComponent from './increment';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


// It's a data format example.
// function priceFormatter(cell, row){
//   return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
// }


class App extends Component {

  render() {
    var products = [{
      id: 1,
      name: "Apple",
      price: "$1,000"
  },{
      id: 2,
      name: "Robot",
      price: "$100"
  }, {
    id: 3,
    name: "Puppie",
    price: "$400.50"
  }];

  // not really sure what the function below does but added it anyway cause of the docs...
  function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <IncrementComponent>
            <h1>Test</h1>
          </IncrementComponent>
          <BootstrapTable data={products} striped={true} hover={true}>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
          </BootstrapTable>,
        </div>
      </Provider>
    );
  }
}

export default App;
