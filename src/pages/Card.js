import React, {Component} from 'react'

import {Route,NavLink} from 'react-router-dom'
import '../css/card.css'

export default class Card extends Component{
	
	render(){
		return (
			


			<div class="page cardPage">
				<nav class="nav">
					<NavLink exact  to ='/card/' >卖座卡</NavLink>
					<NavLink to ='/card/scard'>电子卖座卡</NavLink>
			</nav>


				<Route exact path='/card/'  render={()=>{
					return(
						<div class="fcard-box">
							<div class="user">
								卡号：<input ref="user" type="text" placeholder="请输入卡号" onChange={this.change.bind(this,'user')}/>
								<span class="linebox"></span>
							</div>
							<div class="pwd" >
								密码：<input ref="pwd" type="password" placeholder="请输入密码" onChange={this.change.bind(this,'pwd')}/>
								<span class="linebox"></span>
							</div>
							<div class="button" onClick={this.loginAction.bind(this)}>
								查询
							</div>

						</div>
					)
				}} />

				<Route path='/card/scard' render={()=>{
					return(
						<div class="scard-box fcard-box">
							<div class="user">
								卡号：<input ref="user" type="text" placeholder="请输入15位电子卖座卡" onChange={this.change.bind(this,'user')}/>
								<span class="linebox"></span>
							</div>
							<div class="button" onClick={this.loginAction.bind(this)}>
								查询
							</div>


						</div>
					)
				}} />


				

			</div>
		)
	}
	change(flag){
		var val=this.refs[flag].value
		if(flag=='user'){
			this.setState({user:val})
		}
		else if(flag=='pwd'){
			this.setState({pwd:val})
		}
	}
	loginAction(){
	if(this.state.user!='' &&	this.state.pwd!=''){
		alert('登录成功')
	this.state.history.push({
		pathname:'/',
		state:{
			user:this.state.user,
			pwd:this.state.pwd
		}
	})
	}
	}
	
}