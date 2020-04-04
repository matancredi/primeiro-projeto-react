import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
	<div>
	  <span>Show: </span>
	  <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todos</FilterLink>
	  <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Ativos</FilterLink>
	  <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Feitos</FilterLink>
	</div>
  )
  
  export default Footer