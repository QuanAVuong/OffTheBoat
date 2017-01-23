import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import CheckListContainer from '../components/checklist/CheckListContainer';
import {onCheckList} from './route_data';
import StepContainer from '../components/steps/StepContainer';
import HeaderTest from "../components/common/header-test"

export default (
	<Route>
		<Route path="/home" component ={HeaderTest}/>
		<Route path="/" component={App}>
				<Route path="checklist" component ={CheckListContainer} />
				<Route path ="steps" component={StepContainer} />
				<Route path ="about" component={AboutPage}/>
		</Route>
	</Route>
);
