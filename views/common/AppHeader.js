import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import store from '../../src/store'

let unsubscribe;
console.log(store)
export default class AppHeader extends Component{
	constructor(){
		super();
		
		this.state={
			addr:store.getState().addr
		}
		console.log(store.getState())
	}
	render(){
		return (
			<div class="Appheader">
				<span class='iconfont icon-menu' onClick={this.menuShow.bind(this)}></span>
				<h1 class='title'>{this.props.title}</h1>
				<Link to="/city" class='city'>{this.state.addr}<i class='iconfont icon-arrow-down'></i></Link>

				<Link to="/me" class="iconfont icon-person"></Link>
			</div>
		)
	}
	menuShow(){
		this.props.menuHandle();
	}
	componentWillMount(){
		unsubscribe = store.subscribe(()=>{
			console.log('Header监听触发了');
			this.setState({addr:store.getState().addr});
		});
	
	}
	componentDidMount(){
	unsubscribe();
	}
	
}