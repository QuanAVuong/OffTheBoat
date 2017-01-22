import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import CheckList from '../components/checklist/CheckList';
import {onUsersEnter} from './route_data';


export default (
	<Route path="/" component={App}>
		<Route component ={HomePage}>
			<IndexRoute  component ={CheckList} />
		</Route>
		<Route path ="about" component={AboutPage}/>
	</Route>
);
