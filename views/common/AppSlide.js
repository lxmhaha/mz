import React, {Component} from 'react'

import  menu from '../../src/services/silderBarInfo.js'

export default class AppSlide extends Component{
	constructor(){
		super();
		  
		this.state={
			
		}
	}
	
	render(){
		
		let sliderBarStyle = {
			transform: this.props.show?"none" : "translateX(-100%)"
		}
		let coverStyle = {
			background: this.props.show?"rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
			display: this.props.show?"block" : "none"
		}
	
		let data=this.props.pathname==='/shop'?menu.shopSilderBarData:menu.homeSilderBarData
		return (
			<div class="page tabsPage" >
				<div class='cover' style={coverStyle} onClick={this.hideTab.bind(this)}>
				</div>
				<ul class='slide' style={sliderBarStyle}>
					{ data.map((item,index)=>{
						return(
							<li key={index} onClick={this.tabAction.bind(this,item)}>
								<span>{item.title}</span>
								<span class='iconfont icon-arrow-right'></span>
							</li>
						)
					})
				}
				</ul>
				
			</div>
		)
	}
	tabAction(item){
		
		this.props.tAction(item)
		
		this.props.history.push(item.path);
		console.log(this.props.history)
	}
	hideTab(){
		this.props.menuHandle();
	}
	
}