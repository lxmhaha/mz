import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import store from '../../src/store'

let unsubscribe;

export default class AppHeader extends Component{
	constructor(){
		super();
		//console.log(store.getState())
		this.state={
			addr:store.getState()
		}
		
	}
	render(){
		return (
			<div class="Appheader">
				<span class='iconfont icon-menu' onClick={this.menuShow.bind(this)}></span>
				<h1 class='title'>{this.props.title}</h1>
				<Link to="/city" class='city'>深圳<i class='iconfont icon-arrow-down'></i></Link>

				<Link to="/me" class="iconfont icon-person"></Link>
			</div>
		)
	}
	menuShow(){
		this.props.menuHandle();
//		console.log('dinaji')
	}
	componentWillMount(){
		unsubscribe = store.subscribe(()=>{
			this.setState({addr: store.getState().addr});
		});
	}
	componentDidMount(){
	unsubscribe();
	}
	
}