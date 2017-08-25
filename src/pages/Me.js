import React, {Component} from 'react'



export default class Me extends Component{
	constructor({history}){
		super();
		
		this.state={
			user:'',
			pwd:'',
			history
		}
		console.log(this.state.history)
	}
	
	render(){
		return (
			<div class="page Mepage">
				<div class="loginbox">
					<div class="user">
							<input ref="user" type="text" placeholder="输入手机号/邮箱" onChange={this.change.bind(this,'user')}/>
							<span class="linebox"></span>
					</div>
					<div class="pwd" >
						<input ref="pwd" type="password" placeholder="输入密码/验证码" onChange={this.change.bind(this,'pwd')}/>
							<span class="linebox"></span>
					</div>
					<div class="button" onClick={this.loginAction.bind(this)}>
						登录
					</div>
				</div>
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
	
	var obj = {}
	obj.user = this.state.user;
	obj.pwd = this.state.pwd;
	JSON.stringify(obj)

	setCookie("ifo", JSON.stringify(obj), 10)

	}else{
		alert("请完善信息后登录")
	}

		console.log(this.state.user)
			console.log(this.state.pwd)



	

	}




	
}
	
