import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchBar, ProductCategoryRow, ProductRow, ProductTable, FilterableProductTable} from './Components.js';

function App() {
  return (
   <div>
     <FilterableProductTable />
   </div>
  );
}

export default App;
